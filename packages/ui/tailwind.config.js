import { config } from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [config.base],
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [],
};
