import type { APIRoute } from "astro";

import { extractHookFileName } from "@/utils/hooks";

export const GET: APIRoute = ({ params }) => {
  const hookName = params.hook;
  const hooks: Record<string, string> = import.meta.glob("/src/hooks/*.ts", {
    query: "?raw",
    eager: true,
    import: "default",
  });

  const hook = Object.entries(hooks).find(
    ([key]) => extractHookFileName(key) === hookName,
  )![1];

  return new Response(hook?.trim());
};

export async function getStaticPaths() {
  const hooks: Record<string, string> = import.meta.glob("/src/hooks/*.ts", {
    query: "?raw",
    eager: true,
    import: "default",
  });
  return Object.keys(hooks).map((hook) => {
    const hookName = extractHookFileName(hook);
    return {
      params: { hook: hookName },
    };
  });
}
