import { useEffect } from "react";
import type { DependencyList } from "react";
import useTimeoutFn from "./useTimeoutFn";

export type UseDebounceReturn = [() => boolean | null, () => void];

/**
 * A hook that allows to run a function after a specified delay.
 * @param {Function} fn - The function to run.
 * @param {number} ms - The delay in milliseconds.
 * @param {DependencyList} deps - An array of dependencies that will cause the function to be debounced.
 * @requires ./useTimeoutFn
 * @returns {UseDebounceReturn} An array containing two functions:
 * 1. isReady - A function that returns true if the function has been called within the specified delay, or null if the delay has not yet started.
 * 2. cancel - A function to cancel the debounced function.
 */
export default function useDebounce(
  fn: Function,
  ms: number = 0,
  deps: DependencyList = [],
): UseDebounceReturn {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms);

  useEffect(reset, deps);

  return [isReady, cancel];
}
