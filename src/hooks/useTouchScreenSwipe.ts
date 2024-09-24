import { useState } from "react";
import useEventListener from "./useEventListener";

export type Direction = "up" | "down" | "left" | "right";
type StateDirection = {direction: Direction | null};

/**
 * React  hook for handling swipe gestures on a touch screen device.
 * @requires ./useEventListener
 * @return {StateDirection} containing the current direction of the swipe
 */
export default function useTouchScreenSwipe(
) {
  const [stateDirection, setStateDirection] = useState<StateDirection>({direction: null});
  let xDown = 0;
  let yDown = 0;
  let xDiff = 0;
  let yDiff = 0;

  function getTouches(evt: TouchEvent) {
    return evt.touches[0] || evt.changedTouches[0];
  }

  function handleSwipe(direction: Direction) {
    setStateDirection({...stateDirection, direction: direction});
  }

  useEventListener("touchstart", (e) => {
    const { clientX, clientY } = getTouches(e);
    xDown = clientX;
    yDown = clientY;
  });

  useEventListener("touchend", (e) => {
    const { clientX, clientY } = getTouches(e);
    xDiff = xDown - clientX;
    yDiff = yDown - clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleSwipe("left");
      } else {
        handleSwipe("right");
      }
    } else {
      if (yDiff > 0) {
        handleSwipe("up");
      } else {
        handleSwipe("down");
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
  });

  return stateDirection;
}
