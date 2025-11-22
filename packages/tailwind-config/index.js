/** @type {import('tailwindcss').Config} */
const baseConfig = {
  darkMode: ["class', [data-theme='dark']"],
  theme: {
    fontFamily: {
      sans: ["var(--font-family-sans)"],
      mono: ["var(--font-family-mono)"],
    },
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: "rgb(var(--card))",
        "card-foreground": "rgb(var(--card-foreground))",
        popover: "rgb(var(--popover))",
        "popover-foreground": "rgb(var(--popover-foreground))",
        primary: "rgb(var(--primary))",
        "primary-foreground": "rgb(var(--primary-foreground))",
        secondary: "rgb(var(--secondary))",
        "secondary-foreground": "rgb(var(--secondary-foreground))",
        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        accent: "rgb(var(--accent))",
        "accent-foreground": "rgb(var(--accent-foreground))",
        destructive: "rgb(var(--destructive))",
        "destructive-foreground": "rgb(var(--destructive-foreground))",
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        "chart-1": "rgb(var(--chart-1))",
        "chart-2": "rgb(var(--chart-2))",
        "chart-3": "rgb(var(--chart-3))",
        "chart-4": "rgb(var(--chart-4))",
        "chart-5": "rgb(var(--chart-5))",
      },
      boxShadow: {
        "2xs": "0 1px rgb(0 0 0 / 0.05)",
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        none: "",
      },
    },
  },
};

export const config = {
  base: baseConfig,
};
