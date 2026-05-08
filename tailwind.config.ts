import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f4f5f3",
          100: "#e7e7e3",
          300: "#a8aaa5",
          500: "#62666d",
          700: "#303337",
          800: "#202326",
          900: "#141516",
          950: "#0b0c0d",
        },
        gold: {
          300: "#d8bd78",
          400: "#c9a85f",
          500: "#b08a45",
          600: "#8e6b34",
          700: "#684d25",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "var(--shadow-soft)",
        subtle: "0 14px 44px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
