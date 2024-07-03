import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

export type UseToggleReturn = [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>,
];

/**
 * A hook that allows to toggle a boolean value.
 * @param {boolean} defaultValue - The initial value of the boolean.
 * @returns {UseToggleReturn} An array containing the current value, a function to toggle the value, and a function to set the value.
 */
export default function useToggle(defaultValue?: boolean): UseToggleReturn {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, toggle, setValue];
}
