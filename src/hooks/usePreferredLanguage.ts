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

export default function usePreferredLanguage() {
  return useSyncExternalStore(
    usePreferredLanguageSubscribe,
    getPreferredLanguageSnapshot,
    getPreferredLanguageServerSnapshot,
  );
}
