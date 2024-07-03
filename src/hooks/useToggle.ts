import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

/**
 * A hook that allows to toggle a boolean value.
 * @param {boolean} defaultValue - The initial value of the boolean.
 * @returns {[boolean, () => void, Dispatch<SetStateAction<boolean>>]} An array containing the current value, a function to toggle the value, and a function to set the value.
 */
export default function useToggle(
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, toggle, setValue];
}
