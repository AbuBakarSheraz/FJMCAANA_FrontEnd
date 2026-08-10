import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#0E3B2E", dark: "#092B21", light: "#1C5943" },
        gold: { DEFAULT: "#C99A44", light: "#E4C387" },
        cream: "#FAF6EF",
        sage: "#E6EDE7",
        card: "#F0EADB",
        ink: { DEFAULT: "#202A24", soft: "#4C574F" },
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
