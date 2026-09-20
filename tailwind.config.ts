import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1128",
        accent: "#FFB703",
        secondary: "#8A99B4",
        text: "#F8F9FA",
      },
    },
  },
  plugins: [],
};

export default config;