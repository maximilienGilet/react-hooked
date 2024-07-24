import { useRef, useState } from "react";
import useClickAway from "@/hooks/useClickAway";

export default function UseClickAwayExample() {
  const ref = useRef(null);

  const [count, setCount] = useState(0);

  useClickAway(ref, () => {
    setCount(count + 1);
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Click outside the box to see the alert</p>
      <div className="rounded-lg bg-ctp-surface1 p-4" ref={ref}>
        <p>Click away</p>
      </div>
      <p>Click away count: {count}</p>
    </div>
  );
}
