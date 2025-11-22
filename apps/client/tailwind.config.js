import { config } from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [config.base],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
