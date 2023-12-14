import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        head: ["var(--font-lexend)"],
      },
      colors: {
        accent: {
          50: "#F4F2FF",
          100: "#DCD8FF",
          200: "#C3BEFF",
          DEFAULT: "#5A6AE5",
          800: "#2E42A2",
          900: "#24327C",
        },
        neutral: {
          800: "#4B4B4B",
          900: "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
