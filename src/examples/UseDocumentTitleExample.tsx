import { useState } from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function UseDocumentTitleExample() {
  const [title, setTitle] = useState("Hello, world!");

  useDocumentTitle(title);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>The document title will be updated to the input value.</p>
      <input
        className="rounded bg-ctp-surface1 p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
