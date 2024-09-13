import useQueue from "@/hooks/useQueue";

export default function UseQueueExample() {
  const [queue, { add, remove, clear, first, last, size }] = useQueue([
    1, 2, 3,
  ]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-ctp-text">
      <div className="flex gap-4">
        <button
          className="rounded bg-ctp-green px-4 py-2 text-ctp-base"
          onClick={() => add(4)}
        >
          Add 4
        </button>
        <button
          className="rounded bg-ctp-pink px-4 py-2 text-ctp-base"
          onClick={() => remove()}
        >
          Remove
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
      <div className="flex gap-4">
        <p> First: {first} </p>
        <p> Last: {last} </p>
        <p> Size: {size} </p>
      </div>
      <div className="flex gap-4">
        {queue.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
