import { useCallback, useState } from "react";
import Cookies from "js-cookie";

type CookiesReturn = [
  string | null,
  (newValue: string, options?: Cookies.CookieAttributes) => void,
  () => void,
];

/**
 * A hook that allows to manage cookies.
 * @param {string} cookieName - The name of the cookie.
 * @requires js-cookie
 * @returns {CookiesReturn} An array of three elements:
 * 1. The current value of the cookie.
 * 2. A function to update the cookie value.
 * 3. A function to delete the cookie.
 */
export default function useCookie(cookieName: string): CookiesReturn {
  const [value, setValue] = useState<string | null>(
    () => Cookies.get(cookieName) || null,
  );

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    [cookieName],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName);
    setValue(null);
  }, [cookieName]);

  return [value, updateCookie, deleteCookie];
}
