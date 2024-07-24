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
            "rounded p-2 text-ctp-base",
            value ? "bg-ctp-green" : "bg-ctp-red",
          )}
        >
          {value ? "true" : "false"}
        </span>
      </div>
      <div className="mt-6 flex gap-2">
        <button
          onClick={setTrue}
          className="rounded bg-ctp-green px-4 py-2 text-ctp-base"
        >
          Set to true
        </button>
        <button
          onClick={setFalse}
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
        >
          Set to false
        </button>
        <button
          onClick={toggle}
          className="rounded bg-ctp-text px-4 py-2 text-ctp-base"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
