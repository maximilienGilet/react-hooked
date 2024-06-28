export function getHooks() {
  const hooks: Record<string, string> = import.meta.glob("/src/hooks/*.ts", {
    query: "?raw",
    eager: true,
    import: "default",
  });
  return hooks;
}

export function extractHookName(hook: string) {
  return hook.split("/").pop()?.split(".").shift() ?? hook;
}

export function getHooksNames() {
  const hooks = getHooks();
  return Object.keys(hooks).map((hook) => extractHookName(hook));
}
