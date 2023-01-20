/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    "dist/**",
    "gen/**/*",
    "node_modules/**",
  ],
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended"
  ],
}

