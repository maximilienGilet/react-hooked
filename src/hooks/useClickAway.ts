import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const defaultEvents = ["mousedown", "touchstart"];

/**
 * A hook that allows to handle click events outside of the specified element.
 * @param {RefObject<HTMLElement | null>} ref - The reference to the element that should be clicked outside.
 * @param {(event: E) => void} onClickAway - The callback function to be called when the click event occurs outside of the specified element.
 * @param {string[]} events - An array of event names to listen for.
 */
const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      window.addEventListener(eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, handler);
      }
    };
  }, [events, ref]);
};

export default useClickAway;
