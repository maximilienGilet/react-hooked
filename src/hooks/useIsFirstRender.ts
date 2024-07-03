import { useRef } from "react";

/**
 * React hook that returns true if the component is the first render
 * @returns {boolean} true if the component is the first render
 */
export default function useIsFirstRender(): boolean {
  const renderRef = useRef(true);

  if (renderRef.current === true) {
    renderRef.current = false;
    return true;
  }

  return renderRef.current;
}
