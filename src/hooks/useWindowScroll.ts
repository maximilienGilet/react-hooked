import { useEffect, useState } from "react";

/**
 * Get the current scroll position of the window.
 *
 * @returns {{x: number, y: number}} - The current scroll position of the window.
 */
export default function useWindowScroll(): { x: number; y: number } {
  const [state, setState] = useState({
    x: window?.scrollX ?? 0,
    y: window?.scrollY ?? 0,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return state;
}
