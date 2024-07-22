import { useState } from "react";
import useIsFirstRender from "../hooks/useIsFirstRender";

export default function UseIsFirstRenderExample() {
  const isFirstRender = useIsFirstRender();
  const [count, setCount] = useState(0);

  return (
    <div className="text-ctp-text">
      <p>Is first render: {isFirstRender ? "yes" : "no"}</p>
      <p>Count: {count}</p>
      <button
        className="bg-ctp-blue px-4 py-2 rounded text-ctp-base"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
