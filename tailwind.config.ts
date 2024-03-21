import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        practitioners: "repeat(auto-fill, minmax(200px, 1fr))",
        hospitals: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        head: ["var(--font-lexend)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        accent: {
          20: "#F8F7FC",
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
        gray: {
          100: "#F0F2F5",
          200: "#E4E7EC",
        },
        primary: "#24327C",
        secondary: "#5A6AE5",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
