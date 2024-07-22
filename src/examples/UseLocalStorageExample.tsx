import useLocalStorage from "../hooks/useLocalStorage";

export default function UseLocalStorageExample() {
  const [value, setValue, removeValue] = useLocalStorage("my-key", "default");

  return (
    <div className="flex flex-col items-center gap-4 text-ctp-text">
      <p>Value: {value}</p>
      <div className="flex gap-4">
        <button
          className="bg-ctp-blue px-4 py-2 rounded text-ctp-base"
          onClick={() => setValue("new-value")}
        >
          Set value
        </button>
        <button
          className="bg-ctp-pink px-4 py-2 rounded text-ctp-base"
          onClick={() => setValue((currentValue) => currentValue + "-new")}
        >
          Append "-new" to value
        </button>
        <button
          className="bg-ctp-red px-4 py-2 rounded text-ctp-base"
          onClick={() => removeValue()}
        >
          Remove value
        </button>
      </div>
    </div>
  );
}
