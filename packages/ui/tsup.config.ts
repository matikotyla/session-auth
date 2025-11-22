import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    button: "src/components/button/button.tsx",
    input: "src/components/input/input.tsx",
    separator: "src/components/separator/separator.tsx",
    label: "src/components/label/label.tsx",
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
