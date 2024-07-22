import { useState, useRef, useCallback, useEffect } from "react";

type SetStateCallback<T> = (state: T) => T;

export interface History<T> {
  histories: T[];
  pop: () => T | null;
  clearItems: () => void;
  deleteItem: (value: T) => void;
}

export type InitialStateCallback<T> = () => T;
export type SetState<T> = (nextState: T | SetStateCallback<T>) => void;
export type UseHistoryState<T = unknown> = (
  initialState?: T | InitialStateCallback<T>,
  size?: number,
) => [T, SetState<T>, History<T>];

/**
 * React hook that tracks history of state
 * @param {T | (() => T)} initialState - initial state
 * @param {number} size - max size of history
 * @returns {[T, SetState<T>, History<T>]} state, setState, history, clearItems, deleteItem
 */
export default function useHistoryState<T>(
  initialState: T | (() => T),
  size: number = 20,
): [T, SetState<T>, History<T>] {
  const [state, setState] = useState<T>(initialState);
  const [_, forceUpdate] = useState(0);
  const stateRef = useRef<T>(state);
  const historyRef = useRef<T[]>([]);

  const historyPop = useCallback(() => {
    const historyLength = historyRef.current.length;
    if (historyLength > 0) {
      const value = historyRef.current.pop()!;
      setState(value);
      return value;
    }
    return null;
  }, []);

  const historyDelete = useCallback(
    (value: T) => {
      const deletedHistories = historyRef.current.filter(
        (item) => item !== value,
      );
      historyRef.current = deletedHistories;
      setState(deletedHistories[deletedHistories.length - 1]);
    },
    [historyRef, setState],
  );

  const historyClear = useCallback(() => {
    historyRef.current = [];
    forceUpdate((prev) => prev + 1);
  }, [historyRef, forceUpdate]);

  const setStateCallback = useCallback(
    (nextValue: any) => {
      const value =
        typeof nextValue === "function"
          ? nextValue(stateRef.current)
          : nextValue;

      if (typeof stateRef.current !== "undefined") {
        historyRef.current.push(stateRef.current);
      }
      setState(value);
    },
    [historyRef, setState],
  );

  useEffect(() => {
    if (typeof state !== "undefined") {
      stateRef.current = state;
    }
  }, [state]);

  useEffect(() => {
    const historyLength = historyRef.current.length;

    if (historyLength > size) {
      const excess = historyLength - size;
      historyRef.current.splice(0, excess);
    }
  }, [size, state]);

  return [
    state,
    setStateCallback,
    {
      histories: historyRef.current,
      pop: historyPop,
      deleteItem: historyDelete,
      clearItems: historyClear,
    },
  ];
}
