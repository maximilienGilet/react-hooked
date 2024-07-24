import { useState } from "react";
import useBeforeUnload from "@/hooks/useBeforeUnload";

export default function UseBeforeUnloadExample() {
  const [isEnabled, setIsEnabled] = useState(true);
  useBeforeUnload(isEnabled, "Hello from beforeunload");

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <p className="text-ctp-text">{isEnabled ? "Enabled" : "Disabled"}</p>
      <a href="https://example.com" className="text-ctp-blue underline">
        Quit this page
      </a>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <button
          className="rounded bg-ctp-green px-4 py-2 text-ctp-base"
          onClick={() => setIsEnabled(true)}
        >
          Enable
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={() => setIsEnabled(false)}
        >
          Disable
        </button>
      </div>
    </div>
  );
}
