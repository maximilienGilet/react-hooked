import { useSyncExternalStore } from "react";

const usePreferredLanguageSubscribe = (callback: (event: Event) => void) => {
  window.addEventListener("languagechange", callback);
  return () => window.removeEventListener("languagechange", callback);
};

const getPreferredLanguageSnapshot = () => {
  return navigator.language;
};

const getPreferredLanguageServerSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};

/**
 * React hook to get the user's preferred language
 * @returns {string} The user's preferred language
 */
export default function usePreferredLanguage() {
  return useSyncExternalStore(
    usePreferredLanguageSubscribe,
    getPreferredLanguageSnapshot,
    getPreferredLanguageServerSnapshot,
  );
}
