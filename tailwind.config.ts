import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "global": "1140px",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        support: ["var(--font-noto)", "sans-serif"],
      },
      colors: {
        brand: "#7AE582",
        light: {
          DEFAULT: "#ffffff",
          base: "#646464",
          100: "#f9f9f9",
          200: "#f2f2f2",
          300: "#ededed",
          400: "#e6e6e6",
          500: "#dadada",
          600: "#d2d2d2",
          800: "#bcbcbc",
          900: "#a8a8a8",
        },
        dark: {
          DEFAULT: "#000000",
          base: "#a5a5a5",
          100: "#181818",
          200: "#212121",
          300: "#2a2a2a",
          400: "#323232",
          500: "#3e3e3e",
          600: "#4a4a4a",
          700: "#6e6e6e",
          800: "#808080",
          900: "#999999",
          950: "#2b2b2b",
        },
      },
      keyframes: {
        unblur: {
          "0%": {
            filter: "blur(20px)",
            transform: "scale(1.1)",
          },
          "100%": {
            filter: "blur(0)",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        unblur: "unblur 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
