import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primaryGold: "#e0aa3e",
        primaryGoldLight: "#f8f295",
        deepGold: "#FFB92E",
        midGold: "#FFC247",
        lightGold: "#FFD37A",
        xlGold: "#FFE4AD",
        whiteGold: "#FFF5E0",
        darkGold: "#251f14",
      },
    },
  },
  plugins: [],
};
export default config;
