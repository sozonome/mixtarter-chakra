/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["sznm/react", "plugin:react/jsx-runtime"],
  rules: {
    "@typescript-eslint/no-throw-literal": "off",
    // "import/order": "off",
    "import/extensions": "off", // temporarily off as it produce false positive checking in this project's absolute imports
  },
};
