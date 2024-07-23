import { useSyncExternalStore } from "react";

const useVisibilityChangeSubscribe = (callback: (event: Event) => void) => {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
};

const getVisibilityChangeSnapshot = () => {
  return document.visibilityState;
};

const getVisibilityChangeServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

/**
 * A hook that tracks whether the document is visible or not
 * @returns {boolean} true if document is visible, false otherwise
 */
export default function useVisibilityChange(): boolean {
  const visibilityState = useSyncExternalStore(
    useVisibilityChangeSubscribe,
    getVisibilityChangeSnapshot,
    getVisibilityChangeServerSnapshot,
  );

  return visibilityState === "visible";
}
