import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kaki: {
          DEFAULT: "#3d4a35",
          2: "#4f6143",
          3: "#6b7a5a",
          muted: "#8a9a7f",
        },
        orange: {
          DEFAULT: "#c4732a",
          2: "#d4883a",
          3: "#e8a860",
        },
        sand: {
          DEFAULT: "#f5f0e8",
          2: "#ede5d4",
          3: "#d4c9b0",
        },
        warm: "#faf8f4",
        stone: "#9c8c74",
        ink: {
          1: "#2a2520",
          2: "#5a5248",
          3: "#8a8278",
        },
        carbon: "#1a1714",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        ultra: "0.36em",
        mega: "0.46em",
      },
      transitionTimingFunction: {
        mayina: "cubic-bezier(.76,0,.24,1)",
      },
      animation: {
        "ken-burns": "kenBurns 12s ease-out forwards",
        ticker: "ticker 30s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "sun-pulse": "sunPulse 4s ease-in-out infinite",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        sunPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.08)", opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
