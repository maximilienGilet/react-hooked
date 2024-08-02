/**
 * Get all hooks from the src/hooks directory
 */
export function getHooks(): Record<string, string> {
  return import.meta.glob("/src/hooks/*.ts", {
    query: "?raw",
    eager: true,
    import: "default",
  });
}

/**
 * Get all tests from the src/tests directory
 */
export function getTests(): Record<string, string> {
  return import.meta.glob("/src/tests/*.test.ts", {
    query: "?raw",
    eager: true,
    import: "default",
  });
}

/**
 * Extract the hook file name from the path
 * @param {string} hook The hook file name
 * @returns {string} The hook name
 */
export function extractHookFileName(hook: string): string {
  return hook.split("/").pop() ?? hook;
}

/**
 * Extract the hook name from the file name
 * @param {string} hook The hook file name
 * @returns {string} The hook name
 */
export function extractHookName(hook: string): string {
  return extractHookFileName(hook).split(".").shift() ?? hook;
}

/**
 * Get all hook names from the src/hooks directory
 * @returns {string[]} The hook names
 */
export function getHooksNames(): string[] {
  const hooks = getHooks();
  return Object.keys(hooks).map((hook) => extractHookName(hook));
}

/**
 * Get all test names from the src/tests directory
 * @returns {string[]} The test names
 */
export function getTestNames(): string[] {
  const tests = getTests();
  return Object.keys(tests).map((test) => extractHookName(test));
}
