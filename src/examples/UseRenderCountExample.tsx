import { useState } from "react";
import useRenderCount from "@/hooks/useRenderCount";

export default function UseRenderCountExample() {
  const renderCount = useRenderCount();
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
        className="w-full rounded bg-ctp-sky px-4 py-2 text-ctp-base"
      >
        Counter One: {countOne}
      </button>
      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
        className="w-full rounded bg-ctp-green px-4 py-2 text-ctp-base"
      >
        Counter Two: {countTwo}
      </button>
      <button
        onClick={() => {
          setCountOne(0);
          setCountTwo(0);
        }}
        className="w-min rounded bg-ctp-red px-4 py-2 text-black"
      >
        Reset
      </button>
      <p>Render count: {renderCount}</p>
    </div>
  );
}
