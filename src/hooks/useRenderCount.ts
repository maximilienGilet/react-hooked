import { useRef } from "react";

/**
 * A hook that returns the amount of times a component renders/re-renders
 * @returns {number} the amount of times a component has rendered / re-rendered
 */
export default function useRenderCount(): number {
  const count = useRef(0);

  count.current++;

  return count.current;
}
