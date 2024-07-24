import useCounter from "@/hooks/useCounter";

export default function UseCounterExample() {
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Count: {count}</p>
      <button
        className="rounded bg-ctp-green px-4 py-2 text-ctp-base"
        onClick={() => increment()}
      >
        Increment
      </button>
      <button
        className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
        onClick={() => decrement()}
      >
        Decrement
      </button>
      <button
        className="rounded bg-ctp-yellow px-4 py-2 text-ctp-base"
        onClick={() => reset()}
      >
        Reset
      </button>
      <button
        className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
        onClick={() => setCount(10)}
      >
        Set to 10
      </button>
    </div>
  );
}
