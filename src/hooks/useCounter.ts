import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
};

/**
 * A hook that allows to manage a counter.
 * @param {number} initialValue - The initial value of the counter.
 * @returns An object with the following properties:
 * 1. count - The current value of the counter.
 * 2. increment - A function to increment the counter.
 * 3. decrement - A function to decrement the counter.
 * 4. reset - A function to reset the counter to its initial value.
 * 5. setCount - A function to set the counter value.
 */
export default function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCount] = useState(initialValue ?? 0);

  const increment = useCallback(() => {
    setCount((x) => x + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((x) => x - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue ?? 0);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
