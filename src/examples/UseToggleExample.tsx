import useToggle from "../hooks/useToggle";

export default function UseToggleExample() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={value ? 1 : 0}
          onChange={toggle}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-ctp-text peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-ctp-base after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-ctp-text after:border-ctp-surface2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ctp-blue"></div>
        <span className="ms-3 text-sm font-medium text-ctp-text">
          Toggle me
        </span>
      </label>
    </div>
  );
}
