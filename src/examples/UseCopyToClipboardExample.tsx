import useCopyToClipboard from "@/hooks/useCopyToClipboard";

export default function UseCopyToClipboardExample() {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>Copied text: {copiedText}</p>
      <button
        className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
        onClick={() => copy("Hello, world!")}
      >
        Copy text
      </button>
    </div>
  );
}
