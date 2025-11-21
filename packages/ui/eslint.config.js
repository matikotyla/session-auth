import common from "@repo/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(common.configs.base, common.configs.react, {
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
