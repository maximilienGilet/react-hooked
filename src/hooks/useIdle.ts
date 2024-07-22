import { useEffect, useState } from "react";

function throttle(
  callback: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void {
  let lastInvocationTime = 0;
  return (...args: any[]) => {
    const currentTime = Date.now();
    if (currentTime - lastInvocationTime >= delay) {
      callback(...args);
      lastInvocationTime = currentTime;
    }
  };
}

const defaultEvents = [
  "mousemove",
  "mousedown",
  "resize",
  "keydown",
  "touchstart",
  "wheel",
];
const oneMinute = 60e3;

/**
 * React hook that tracks idle state
 * @param {number} ms - time in milliseconds
 * @returns {boolean} idle state
 */
export default function useIdle(
  ms: number = oneMinute,
  initialState: boolean = false,
  events: string[] = defaultEvents,
): boolean {
  const [state, setState] = useState<boolean>(initialState);

  useEffect(() => {
    let mounted = true;
    let timeout: any;
    let localState: boolean = state;
    const set = (newState: boolean) => {
      if (mounted) {
        localState = newState;
        setState(newState);
      }
    };

    const onEvent = throttle(() => {
      if (localState) {
        set(false);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => set(true), ms);
    }, 50);
    const onVisibility = () => {
      if (!document.hidden) {
        onEvent();
      }
    };

    events.map((event) => window.addEventListener(event, onEvent));
    document.addEventListener("visibilitychange", onVisibility);

    timeout = setTimeout(() => set(true), ms);

    return () => {
      mounted = false;

      events.map((event) => window.removeEventListener(event, onEvent));
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ms, events]);

  return state;
}
