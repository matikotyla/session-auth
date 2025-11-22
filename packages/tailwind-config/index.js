/** @type {import('tailwindcss').Config} */
const baseConfig = {
  darkMode: ["class', [data-theme='dark']"],
  theme: {
    fontFamily: {
      sans: ["var(--font-family-sans)"],
      mono: ["var(--font-family-mono)"],
    },
  },
};

export const config = {
  base: baseConfig,
};
