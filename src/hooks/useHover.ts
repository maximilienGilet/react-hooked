import { useEffect, useState, type RefObject } from "react";

export default function useHover(
  ref: RefObject<Element>,
  enabled: boolean = true,
): boolean {
  if (process.env.NODE_ENV === "development") {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("useHover expects a single ref argument.");
    }
  }

  const [value, setValue] = useState(false);

  useEffect(() => {
    const onMouseOver = () => setValue(true);
    const onMouseOut = () => setValue(false);

    if (enabled && ref && ref.current) {
      ref.current.addEventListener("mouseover", onMouseOver);
      ref.current.addEventListener("mouseout", onMouseOut);
    }

    // fixes react-hooks/exhaustive-deps warning about stale ref elements
    const { current } = ref;

    return () => {
      if (enabled && current) {
        current.removeEventListener("mouseover", onMouseOver);
        current.removeEventListener("mouseout", onMouseOut);
      }
    };
  }, [enabled, ref]);

  return value;
}
