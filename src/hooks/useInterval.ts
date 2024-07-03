import { useEffect, useRef } from "react";

/**
 * React hook that calls a function at a specified interval
 * @param {Function} callback - function to call
 * @param {number} delay - interval in milliseconds
 */
const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;
