import { type Reducer, useReducer } from "react";

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === "boolean" ? nextValue : !state;

/**
 * Toggle a boolean value.
 * @param {boolean} initialValue - The initial value of the boolean.
 * @returns {[value, setValue]} A tuple of [value, setValue], where value is a boolean and setValue is a function that takes a boolean as an argument and sets the value to that boolean.
 */
const useToggle = (
  initialValue: boolean,
): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
