import clsx from "clsx";
import useBoolean from "@/hooks/useBoolean";

export default function UseBooleanExample() {
  const { value, setTrue, setFalse, toggle } = useBoolean(false);

  return (
    <div>
      <div className="text-ctp-text">
        The value is &nbsp;
        <span
          className={clsx(
            "p-2 rounded text-ctp-base",
            value ? "bg-ctp-green" : "bg-ctp-red",
          )}
        >
          {value ? "true" : "false"}
        </span>
      </div>
      <div className="flex gap-2 mt-6">
        <button
          onClick={setTrue}
          className="bg-ctp-green text-ctp-base px-4 py-2 rounded"
        >
          Set to true
        </button>
        <button
          onClick={setFalse}
          className="bg-ctp-red text-ctp-base px-4 py-2 rounded"
        >
          Set to false
        </button>
        <button
          onClick={toggle}
          className="bg-ctp-text text-ctp-base px-4 py-2 rounded"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
