import { useCallback, useEffect, useState } from "react";

/**
 * Hook to read and write the hash of the current url. It also updates the hash when the url changes.
 * @returns {[string, (newHash: string) => void]} - The state of the hash and a function to set the hash
 */
export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
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
};
