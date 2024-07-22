import { useCallback, useEffect, useLayoutEffect, useState } from "react";

type UseHashReturn = [string, (newHash: string) => void];

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Hook to read and write the hash of the current url. It also updates the hash when the url changes.
 * @returns {UseHashReturn} An array of two elements:
 * 1. The current hash of the url.
 * 2. A function to set the hash of the url.
 */
export default function useHash(): UseHashReturn {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash],
  );

  return [hash, _setHash] as const;
}
