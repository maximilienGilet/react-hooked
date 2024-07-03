import { useState, useCallback } from "react";

type UseListReturn<T> = [
  T[],
  {
    set: (newList: T[]) => void;
    push: (element: T) => void;
    removeAt: (index: number) => void;
    insertAt: (index: number, element: T) => void;
    updateAt: (index: number, element: T) => void;
    clear: () => void;
  },
];

/**
 * React hook that returns a list and a set of functions to manipulate it
 * @param {T[]} defaultList - default list
 * @returns {UseListReturn<T>} list and set of functions to manipulate it
 */
export default function useList<T>(defaultList: T[] = []): UseListReturn<T> {
  const [list, setList] = useState<T[]>(defaultList);

  const set = useCallback((newList: T[]) => {
    setList(newList);
  }, []);

  const push = useCallback((element: T) => {
    setList((currentList) => [...currentList, element]);
  }, []);

  const removeAt = useCallback((index: number) => {
    setList((currentList) => [
      ...currentList.slice(0, index),
      ...currentList.slice(index + 1),
    ]);
  }, []);

  const insertAt = useCallback((index: number, element: T) => {
    setList((currentList) => [
      ...currentList.slice(0, index),
      element,
      ...currentList.slice(index),
    ]);
  }, []);

  const updateAt = useCallback((index: number, element: T) => {
    setList((currentList) =>
      currentList.map((item, i) => (i === index ? element : item)),
    );
  }, []);

  const clear = useCallback(() => setList([]), []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}
