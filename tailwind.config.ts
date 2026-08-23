import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ai: {
          DEFAULT: "#1F3A5F",
          light: "#2E4F7C",
          dark: "#152941",
        },
        sumi: "#22252B",
        washi: {
          DEFAULT: "#EDEAE0",
          dark: "#16181C",
        },
        hanko: {
          DEFAULT: "#B23A2E",
          light: "#C9584C",
        },
        savane: "#C08A33",
        bamboo: "#4B7051",
      },
      fontFamily: {
        display: ["var(--font-shippori)", "serif"],
        body: ["var(--font-zen)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        stamp: {
          "0%": { transform: "scale(2.2) rotate(-8deg)", opacity: "0" },
          "40%": { transform: "scale(0.95) rotate(-8deg)", opacity: "1" },
          "60%": { transform: "scale(1.05) rotate(-8deg)" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
        },
        "brush-x": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        stamp: "stamp 0.45s cubic-bezier(0.2, 0.8, 0.3, 1) forwards",
        "brush-x": "brush-x 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
