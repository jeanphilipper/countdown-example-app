/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "quotes": ["error", "double"],
  },
}
