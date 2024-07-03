import { useEffect } from "react";

/**
 * React hook that sets the document title
 * @param {string} title - new title
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
