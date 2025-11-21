import { defineConfig } from "eslint/config";
import common from "@repo/eslint-config";

const eslintConfig = defineConfig([
  common.configs.base,
  common.configs.react,
  common.configs.next,
]);

export default eslintConfig;
