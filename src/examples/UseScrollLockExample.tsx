import useScrollLock from "@/hooks/useScrollLock";

export default function UseScrollLockExample() {
  const { isLocked, lock, unlock } = useScrollLock({
    autoLock: false,
  });

  return (
    <div className="flex flex-col items-center gap-4 text-ctp-text">
      <p>Is locked: {isLocked ? "true" : "false"}</p>
      <button
        className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
        onClick={lock}
      >
        Lock
      </button>
      <button
        className="rounded bg-ctp-pink px-4 py-2 text-ctp-base"
        onClick={unlock}
      >
        Unlock
      </button>
    </div>
  );
}
