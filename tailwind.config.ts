import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00B1B0",
        black: "#000135",
        lightGray: "#909295",
        darkGray: "#6C6C6C",
        borderGray: "#E4EAF0",
        footerBG: "#010112",
        highlight: "#FF5603",
        star: "#F7C64F"
      },
    },
  },
  plugins: [],
};
export default config;
