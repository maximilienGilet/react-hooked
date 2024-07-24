import { useRef } from "react";
import useResizeObserver from "@/hooks/useResizeObserver";

export default function UseResizeObserverExample() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { width, height } = useResizeObserver({
    ref,
    box: "border-box",
    // onResize: (size) => console.log(size),
  });

  return (
    <div className="flex resize flex-col items-center gap-4 border border-ctp-base text-ctp-text">
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <textarea
        ref={ref}
        className="resize rounded bg-ctp-surface1 p-2"
        rows={10}
        cols={50}
        defaultValue="Resize me!"
      />
    </div>
  );
}
