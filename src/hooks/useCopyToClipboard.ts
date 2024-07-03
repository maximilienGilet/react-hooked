import { useCallback, useState } from "react";

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

type CopyReturn = [CopiedValue, CopyFn];

/**
 * A hook that allows to copy text to clipboard.
 * @returns {CopyReturn} An array of two elements:
 * 1. The current value of the copied text.
 * 2. A function to copy text to clipboard.
 */
export default function useCopyToClipboard(): CopyReturn {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}
