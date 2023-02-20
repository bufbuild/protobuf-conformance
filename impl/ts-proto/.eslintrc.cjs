/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["gen/**/*", "node_modules/**", "dist/**/*"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
