/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2017: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "dist",
    "node_modules",
    "scripts",
    ".eslintrc.cjs",
    "rollup.config.dts.js",
    "vite.config.js",
    "**/*.stories.ts",
    "**/*.stories.tsx",
    "storybook-static",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
}
