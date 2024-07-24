import useSessionStorage from "@/hooks/useSessionStorage";

export default function UseSessionStorageExample() {
  const [value, setValue, removeValue] = useSessionStorage("my-key", "default");

  return (
    <div className="flex flex-col items-center gap-4 text-ctp-text">
      <p>Value: {value}</p>
      <div className="flex gap-4">
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => setValue("new-value")}
        >
          Set value
        </button>
        <button
          className="rounded bg-ctp-pink px-4 py-2 text-ctp-base"
          onClick={() => setValue((currentValue) => currentValue + "-new")}
        >
          Append "-new" to value
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={() => removeValue()}
        >
          Remove value
        </button>
      </div>
    </div>
  );
}
