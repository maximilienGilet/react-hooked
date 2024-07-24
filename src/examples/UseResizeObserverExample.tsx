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
    <div className="flex flex-col items-center gap-4 text-ctp-text resize border border-ctp-base">
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <textarea
        ref={ref}
        className="bg-ctp-surface1 p-2 rounded resize"
        rows={10}
        cols={50}
        defaultValue="Resize me!"
      />
    </div>
  );
}
