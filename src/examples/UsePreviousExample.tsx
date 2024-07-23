import { useRef, useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function UsePreviousExample() {
  const [input, setInput] = useState("");
  const previousInput = usePrevious(input);

  return (
    <div className="text-ctp-text">
      <input
        type="text"
        value={input}
        placeholder="Type something..."
        className="bg-ctp-surface1 p-2 rounded"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <p>Current input: {input}</p>
      <p>Previous input: {previousInput}</p>
    </div>
  );
}
