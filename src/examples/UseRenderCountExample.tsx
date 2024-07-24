import { useState } from "react";
import useRenderCount from "../hooks/useRenderCount";

export default function UseRenderCountExample() {
  const renderCount = useRenderCount();
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  return (
    <div className="space-y-4 flex flex-col items-center">
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
        className="bg-ctp-sky text-ctp-base py-2 px-4 rounded w-full"
      >
        Counter One: {countOne}
      </button>
      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
        className="bg-ctp-green text-ctp-base py-2 px-4 rounded w-full"
      >
        Counter Two: {countTwo}
      </button>
      <button
        onClick={() => {
          setCountOne(0);
          setCountTwo(0);
        }}
        className="bg-ctp-red text-black py-2 px-4 rounded w-min"
      >
        Reset
      </button>
      <p>Render count: {renderCount}</p>
    </div>
  );
}
