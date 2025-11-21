import js from "@eslint/js";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import turboConfig from "eslint-config-turbo/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginNext from "@next/eslint-plugin-next";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/**
 * A shared base ESLint configuration.
 * @type {import("eslint").Linter.Config[]}
 */
const baseConfig = defineConfig([
  js.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  ...turboConfig,
  {
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "@typescript-eslint/no-namespace": "off",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
]);

/**
 * A shared react ESLint configuration.
 * @type {import("eslint").Linter.Config[]}
 */
const reactConfig = defineConfig([
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
]);

/**
 * A shared next ESLint configuration.
 * @type {import("eslint").Linter.Config[]}
 */
const nextConfig = defineConfig([
  // ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
]);

export default {
  configs: {
    base: baseConfig,
    react: reactConfig,
    next: nextConfig,
  },
};
