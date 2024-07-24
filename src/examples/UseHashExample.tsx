import useHash from "@/hooks/useHash";

export default function UseHashExample() {
  const [hash, setHash] = useHash();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Sets the hash of the url and updates the hash when the url changes.</p>
      <p>The hash is {hash || "empty"}.</p>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <button
          className="rounded bg-ctp-green px-4 py-2 text-ctp-base"
          onClick={() => setHash("hello")}
        >
          Set Hash to hello
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={() => setHash("")}
        >
          Clear Hash
        </button>
      </div>
    </div>
  );
}
