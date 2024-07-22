import useCountdown from "../hooks/useCountdown";

export default function UseCountdownExample() {
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 1000,
      intervalMs: 10,
    });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-3xl font-bold">{count}</div>
      <div className="flex gap-4">
        <button onClick={startCountdown}>Start</button>
        <button onClick={stopCountdown}>Stop</button>
        <button onClick={resetCountdown}>Reset</button>
      </div>
    </div>
  );
}
