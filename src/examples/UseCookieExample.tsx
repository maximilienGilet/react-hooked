import useCookie from "../hooks/useCookie";

export default function UseCookieExample() {
  const [cookie, setCookie, removeCookie] = useCookie("example-cookie");

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Cookie: {cookie}</p>
      <button
        className="bg-ctp-blue text-ctp-base py-2 px-4 rounded"
        onClick={() => setCookie("example-value")}
      >
        Set cookie
      </button>
      <button
        className="bg-ctp-red text-ctp-base py-2 px-4 rounded"
        onClick={() => removeCookie()}
      >
        Delete cookie
      </button>
    </div>
  );
}
