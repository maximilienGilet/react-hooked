import { useEffect } from "react";

/**
 * Sets the favicon
 * @param {string} href - The favicon href
 * @param {string} [type="image/x-icon"] - The favicon type
 */
const useFavicon = (href: string, type: string = "image/x-icon") => {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = type;
    link.href = href;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [href]);
};

export default useFavicon;
