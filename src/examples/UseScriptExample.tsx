import useScript from "@/hooks/useScript";

export default function UseScriptExample() {
  const status = useScript(
    "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
  );

  return (
    <div className="text-ctp-text">
      <h1>useScript</h1>
      <p>Status: {status}</p>
    </div>
  );
}
