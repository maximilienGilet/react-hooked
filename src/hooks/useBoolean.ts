import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type UseBooleanReturn = {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
	setTrue: () => void;
	setFalse: () => void;
	toggle: () => void;
};

/**
 * A hook that allows to manage a boolean value.
 * @param {boolean} defaultValue - The initial value of the boolean.
 * @returns {UseBooleanReturn} An object with the following properties:
 * 1. value - The current value of the boolean.
 * 2. setValue - A function to set the value.
 * 3. setTrue - A function to set the value to true.
 * 4. setFalse - A function to set the value to false.
 * 5. toggle - A function to toggle the value.
 */
export default function useBoolean(defaultValue?: boolean): UseBooleanReturn {
	if (typeof defaultValue !== "boolean") {
		throw new Error("defaultValue must be `true` or `false`");
	}
	const [value, setValue] = useState(defaultValue);

	const setTrue = useCallback(() => {
		setValue(true);
	}, []);

	const setFalse = useCallback(() => {
		setValue(false);
	}, []);

	const toggle = useCallback(() => {
		setValue((x) => !x);
	}, []);

	return { value, setValue, setTrue, setFalse, toggle };
}
