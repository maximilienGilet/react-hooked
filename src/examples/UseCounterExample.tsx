import useCounter from "../hooks/useCounter";

export default function UseCounterExample() {
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Count: {count}</p>
      <button
        className="bg-ctp-green text-ctp-base py-2 px-4 rounded"
        onClick={() => increment()}
      >
        Increment
      </button>
      <button
        className="bg-ctp-red text-ctp-base py-2 px-4 rounded"
        onClick={() => decrement()}
      >
        Decrement
      </button>
      <button
        className="bg-ctp-yellow text-ctp-base py-2 px-4 rounded"
        onClick={() => reset()}
      >
        Reset
      </button>
      <button
        className="bg-ctp-blue text-ctp-base py-2 px-4 rounded"
        onClick={() => setCount(10)}
      >
        Set to 10
      </button>
    </div>
  );
}
