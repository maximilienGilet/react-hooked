import { useCallback, useEffect, useRef, useState } from "react";

type CountdownOptions = {
  countStart: number;

  intervalMs?: number;
  isIncrement?: boolean;

  countStop?: number;
};

type CountdownControllers = {
  startCountdown: () => void;
  stopCountdown: () => void;
  resetCountdown: () => void;
};

/**
 * A hook that allows to count down from a given number.
 * @param {CountdownOptions} options - Options for the hook.
 * @returns {[number, CountdownControllers]} An array of two elements:
 * 1. The current count.
 * 2. An object with functions to control the countdown.
 */
export default function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
  isIncrement = false,
}: CountdownOptions): [number, CountdownControllers] {
  const savedCallback = useRef<Function>(() => {});

  const [count, setCount] = useState(countStart);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCounter = () => setCount(countStart);

  const [isCountdownRunning, setIsCountdownRunning] = useState(false);
  const startCountdown = () => setIsCountdownRunning(true);
  const stopCountdown = () => setIsCountdownRunning(false);

  // Will set running false and reset the seconds to initial value.
  const resetCountdown = useCallback(() => {
    stopCountdown();
    resetCounter();
  }, [stopCountdown, resetCounter]);

  const countdownCallback = useCallback(() => {
    if (count === countStop) {
      stopCountdown();
      return;
    }

    if (isIncrement) {
      increment();
    } else {
      decrement();
    }
  }, [count, countStop, decrement, increment, isIncrement, stopCountdown]);

  useEffect(() => {
    savedCallback.current = countdownCallback;
  });

  const delay = isCountdownRunning ? intervalMs : null;

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);

  return [count, { startCountdown, stopCountdown, resetCountdown }];
}
