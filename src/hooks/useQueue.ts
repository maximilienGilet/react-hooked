import { useCallback, useState } from "react";

type UseQueueActions<T> = {
  add: (element: T) => void;
  remove: () => T | undefined;
  clear: () => void;
  first: T | undefined;
  last: T | undefined;
  size: number;
};

type UseQueueReturn<T> = [Array<T>, UseQueueActions<T>];
/**
 * A hook that allows to handle queue while maintaining the necessary state updates.
 * @param  {Array<T>} initialValue - The optional initial value of the queue.
 * @returns {UseQueueReturn} An array containing the queue and an object with the following properties:
 * properties:
 * 1. add - A function to add an element to the queue.
 * 2. remove - A function to remove an element from the queue.
 * 3. clear - A function to clear the queue.
 * 4. first - The first element in the queue.
 * 5. last - The last element in the queue.
 */

export default function useQueue<T>(
  initialValue: Array<T> = [],
): UseQueueReturn<T> {
  const [queue, setQueue] = useState(initialValue);

  const add = useCallback((element: T) => {
    setQueue((q) => [...q, element]);
  }, []);

  const remove = useCallback(() => {
    let removedElement;

    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  return [
    queue,
    {
      add,
      remove,
      clear,
      first: queue[0],
      last: queue[queue.length - 1],
      size: queue.length,
    },
  ];
}
