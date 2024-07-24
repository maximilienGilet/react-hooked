import { useRef, useState } from "react";
import useFullscreen from "@/hooks/useFullscreen";

export default function UseFullscreenExample() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const isFullscreen = useFullscreen(ref, enabled);

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text"
      ref={ref}
    >
      <p>Fullscreen is {isFullscreen ? "enabled" : "disabled"}.</p>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => setEnabled(!enabled)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
