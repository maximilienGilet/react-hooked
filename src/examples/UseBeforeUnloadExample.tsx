import { useState } from "react";
import useBeforeUnload from "@/hooks/useBeforeUnload";

export default function UseBeforeUnloadExample() {
  const [isEnabled, setIsEnabled] = useState(true);
  useBeforeUnload(isEnabled, "Hello from beforeunload");

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <p className="text-ctp-text">{isEnabled ? "Enabled" : "Disabled"}</p>
      <a href="https://example.com" className="underline text-ctp-blue">
        Quit this page
      </a>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <button
          className="bg-ctp-green text-ctp-base py-2 px-4 rounded"
          onClick={() => setIsEnabled(true)}
        >
          Enable
        </button>
        <button
          className="bg-ctp-red text-ctp-base py-2 px-4 rounded"
          onClick={() => setIsEnabled(false)}
        >
          Disable
        </button>
      </div>
    </div>
  );
}
