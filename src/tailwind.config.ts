import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6E1B2E",
          dark: "#4E1120",
          light: "#8C2C41",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E1C588",
        },
        cream: "#FAF6F0",
        card: "#F3E9E4",
        blush: "#E7C9C4",
        ink: {
          DEFAULT: "#2B1116",
          soft: "#5C4A4C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
