import useToggle from "@/hooks/useToggle";

export default function UseToggleExample() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value={value ? 1 : 0}
          onChange={toggle}
          className="peer sr-only"
        />
        <div className="peer relative h-6 w-11 rounded-full bg-ctp-text after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-ctp-surface2 after:bg-ctp-text after:transition-all after:content-[''] peer-checked:bg-ctp-blue peer-checked:after:translate-x-full peer-checked:after:border-ctp-base peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full"></div>
        <span className="ms-3 text-sm font-medium text-ctp-text">
          Toggle me
        </span>
      </label>
    </div>
  );
}
