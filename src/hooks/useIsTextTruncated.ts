import { type RefObject, useEffect, useRef, useState } from "react";

/**
 * @description A hook that checks if the text content of an element is truncated or not.
 * @param ref  A reference to the element to check if its text is truncated.
 * @returns {boolean} A boolean indicating if the text is truncated or not.
 */
export default function useIsTextTruncated(ref: RefObject<HTMLElement>) {
	const [textTruncated, setTextTruncated] = useState<boolean>(false);
	const prevContentRef = useRef<string | null>(null);

	useEffect(() => {
		const element = ref.current;
		if (element) {
			const currentContent = element.textContent || "";
			if (prevContentRef.current !== currentContent) {
				prevContentRef.current = currentContent;
			}
			if (element.scrollWidth > element.offsetWidth) {
				setTextTruncated(true);
			} else {
				setTextTruncated(false);
			}
		}
	}, [ref, ref.current?.textContent]);

	return textTruncated;
}
