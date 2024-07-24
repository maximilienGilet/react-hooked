import useScrollLock from "@/hooks/useScrollLock";

export default function UseScrollLockExample() {
  const { isLocked, lock, unlock } = useScrollLock({
    autoLock: false,
  });

  return (
    <div className="flex flex-col items-center gap-4 text-ctp-text">
      <p>Is locked: {isLocked ? "true" : "false"}</p>
      <button
        className="bg-ctp-blue text-ctp-base py-2 px-4 rounded"
        onClick={lock}
      >
        Lock
      </button>
      <button
        className="bg-ctp-pink text-ctp-base py-2 px-4 rounded"
        onClick={unlock}
      >
        Unlock
      </button>
    </div>
  );
}
