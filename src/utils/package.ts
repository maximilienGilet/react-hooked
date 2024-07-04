export type PackageManager = "npm" | "yarn" | "pnpm";

/**
 * Returns the install command for a given package manager.
 * @param {string} packageNames The name of the packages to install.
 * @param {PackageManager} tool The package manager to use.
 * @returns {string} The install command for the given package manager.
 */
export const getInstallCommand = (
  packageNames: string[],
  tool: PackageManager,
): string => {
  switch (tool) {
    case "yarn":
      return `yarn add ${packageNames.join(" ")}`;
    case "pnpm":
      return `pnpm add ${packageNames.join(" ")}`;
    default:
      return `npm install ${packageNames.join(" ")}`;
  }
};
