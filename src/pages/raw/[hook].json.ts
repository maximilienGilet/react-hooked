import type { APIRoute } from "astro";

import {
  extractHookFileName,
  extractHookName,
  getHooks,
  getTests,
} from "@/utils/hooks";
import jsDoc2JSON from "@/utils/jsdoc2json";

const site = import.meta.env.SITE;

// Generate a JSON file compatible with the Shadcn CLI
function shadcnJSON({
  hookName,
  hookContent,
  requiredPackages,
  requiredLocals,
}: {
  hookName: string;
  hookContent: string;
  requiredPackages?: string[];
  requiredLocals?: string[];
}) {
  const baseReturn = {
    name: hookName,
    type: "registry:block",
    dependencies: requiredPackages ?? [],
    devDependencies: [],
    registryDependencies: requiredLocals?.map(
      (req) => `${site}/raw/${req.replace("./", "")}.json`,
    ),
    files: [
      {
        path: `./src/hooks/${hookName}.ts`,
        content: hookContent,
        type: "registry:example",
        target: `./hooks/${hookName}.ts`,
      },
    ],
    tailwind: {},
    cssVars: {},
    meta: {},
  };

  const tests = getTests();
  const test = Object.entries(tests).find(
    ([key]) => extractHookFileName(key) === hookName + ".test.ts",
  );

  if (test) {
    baseReturn.files.push({
      path: `./src/hooks/__tests__/${hookName}.test.ts`,
      content: test[1].trim(),
      type: "registry:example",
      target: `./hooks/__tests__/${hookName}.test.ts`,
    });
  }

  return baseReturn;
}

export const GET: APIRoute = ({ params }) => {
  const hookName = params.hook as string;
  const hooks = getHooks();
  const hook = Object.entries(hooks).find(
    ([key]) => extractHookFileName(key) === hookName + ".ts",
  )![1];
  const doc = jsDoc2JSON(hook as string);
  const requiredPackages =
    doc.tags.filter((el) => el.tag === "requires" && el.type === "package") ??
    [];
  const requiredLocals =
    doc.tags.filter((el) => el.tag === "requires" && el.type === "local") ?? [];

  // return new Response(hook?.trim());
  return new Response(
    JSON.stringify(
      shadcnJSON({
        hookName,
        hookContent: hook,
        requiredPackages: requiredPackages.map((el) => el.description!),
        requiredLocals: requiredLocals.map((el) => el.description!),
      }),
    ),
  );
};

export async function getStaticPaths() {
  const hooks = getHooks();
  return Object.keys(hooks).map((hook) => {
    const hookName = extractHookName(hook);
    return {
      params: { hook: hookName },
    };
  });
}
