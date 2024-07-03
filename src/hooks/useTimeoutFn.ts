import { useCallback, useEffect, useRef } from "react";

export type UseTimeoutFnReturn = [() => boolean | null, () => void, () => void];

/**
 * A hook that allows to run a function after a specified delay.
 * @param {Function} fn - The function to run.
 * @param {number} ms - The delay in milliseconds.
 * @returns {UseTimeoutFnReturn} An array containing three functions:
 * 1. isReady - A function that returns true if the function has been called within the specified delay, or null if the delay has not yet started.
 * 2. clear - A function to clear the timeout.
 * 3. set - A function to set the timeout.
 */
export default function useTimeoutFn(
  fn: Function,
  ms: number = 0,
): UseTimeoutFnReturn {
  const ready = useRef<boolean | null>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);

  const set = useCallback(() => {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);

  // update ref when function changes
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  // set on mount, clear on unmount
  useEffect(() => {
    set();

    return clear;
  }, [ms]);

  return [isReady, clear, set];
}
