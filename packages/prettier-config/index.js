/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const baseConfig = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-organize-imports"],
};

export const config = {
  base: baseConfig,
};
