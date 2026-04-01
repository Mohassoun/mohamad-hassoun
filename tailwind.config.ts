import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#64ffda",
          dark: "#0f172a",
          muted: "#8892b0",
          panel: "#112240",
          soft: "#ccd6f6"
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        script: ["var(--font-agustina)", "cursive"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(100,255,218,0.15), 0 24px 80px rgba(2, 12, 27, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
