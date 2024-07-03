import { useEffect, useRef } from "react";

/**
 * A hook that allows to run a function when the component is unmounted.
 * @param {() => void} func - The function to run when the component is unmounted.
 */
export default function useUnmount(func: () => void) {
  const funcRef = useRef(func);

  funcRef.current = func;

  useEffect(
    () => () => {
      funcRef.current();
    },
    [],
  );
}
