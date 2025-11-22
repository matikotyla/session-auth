import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    button: "src/components/button/button.tsx",
    styles: "src/styles.css",
  },
  clean: true,
  format: ["cjs", "esm"],
  loader: {
    ".css": "copy",
  },
  dts: true,
  minify: true,
  external: ["react"],
  splitting: false,
});
