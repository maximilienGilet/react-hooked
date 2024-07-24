import { useState } from "react";
import useTimeoutFn from "@/hooks/useTimeoutFn";

export default function UseTimeoutFnExample() {
  const [count, setCount] = useState(0);
  const [isReady, clear, set] = useTimeoutFn(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div className="text-ctp-text">
      <p>Count incremented by timeout: {count}</p>
      <div className="flex gap-4 py-4">
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={set}
        >
          Increment after 1 second
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={clear}
        >
          Cancel increment
        </button>
      </div>
      <p>Timeout has been called: {isReady() ? "yes" : "no"}</p>
    </div>
  );
}
