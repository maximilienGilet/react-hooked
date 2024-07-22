import { useState } from "react";
import useEventListener from "../hooks/useEventListener";

export default function UseEventListenerExample() {
  const [keydownCount, setKeydownCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEventListener("keydown", (_event) => {
    setKeydownCount(keydownCount + 1);
  });

  useEventListener("click", (_event) => {
    setClickCount(clickCount + 1);
  });

  return (
    <div>
      <div>You have pressed the key {keydownCount} times</div>
      <div>You have clicked {clickCount} times</div>
    </div>
  );
}
