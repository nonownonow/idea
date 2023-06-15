/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:storybook/recommended",
  ],
  rules: {
    "react/display-name": 0,
    "react/jsx-pascal-case": 0,
  },
};
