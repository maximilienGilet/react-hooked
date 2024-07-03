import { useEffect, useState } from "react";

/**
 * React hook that returns true if the code is running on the client side
 * @returns {boolean} true if the code is running on the client side
 */
export default function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
