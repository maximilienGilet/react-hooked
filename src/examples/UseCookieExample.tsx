import useCookie from "@/hooks/useCookie";

export default function UseCookieExample() {
  const [cookie, setCookie, removeCookie] = useCookie("example-cookie");

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Cookie: {cookie}</p>
      <button
        className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
        onClick={() => setCookie("example-value")}
      >
        Set cookie
      </button>
      <button
        className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
        onClick={() => removeCookie()}
      >
        Delete cookie
      </button>
    </div>
  );
}
