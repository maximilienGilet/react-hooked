import type { APIRoute } from "astro";

import { extractHookFileName, getHooks } from "@/utils/hooks";

export const GET: APIRoute = ({ params }) => {
  const hookName = params.hook;
  const hooks = getHooks();

  const hook = Object.entries(hooks).find(
    ([key]) => extractHookFileName(key) === hookName,
  )![1];

  return new Response(hook?.trim());
};

export async function getStaticPaths() {
  const hooks = getHooks();
  return Object.keys(hooks).map((hook) => {
    const hookName = extractHookFileName(hook);
    return {
      params: { hook: hookName },
    };
  });
}
