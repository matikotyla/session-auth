import common from "@repo/eslint-config";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  common.configs.base,
  common.configs.react,
  common.configs.next,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);

export default eslintConfig;
