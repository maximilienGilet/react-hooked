import { useEffect, useLayoutEffect } from "react";

/**
 * A hook that allows to use the useLayoutEffect hook in isomorphic React applications.
 * @param {Function} effect - The effect to be run.
 * @param {DependencyList} deps - The dependencies of the effect.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
