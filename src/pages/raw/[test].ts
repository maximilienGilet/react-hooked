import type { APIRoute } from "astro";

import { extractHookFileName, getTests } from "@/utils/hooks";

export const GET: APIRoute = ({ params }) => {
  const testName = params.test;
  const tests = getTests();

  const test = Object.entries(tests).find(
    ([key]) => extractHookFileName(key) === testName,
  )![1];

  return new Response(test?.trim());
};

export async function getStaticPaths() {
  const tests = getTests();
  return Object.keys(tests).map((hook) => {
    const testName = extractHookFileName(hook);
    return {
      params: { test: testName },
    };
  });
}
