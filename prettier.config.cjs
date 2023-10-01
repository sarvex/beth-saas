/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  arrowParens: "always",
  printWidth: 100,
  singleQuote: true,
  semi: false,
  trailingComma: "es5",
  bracketSameline: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

module.exports = config;
