import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        muted: "#56524D",
        porcelain: "#FBFAF7",
        line: "#E7E1D8",
        gold: "#B9823F",
        "gold-dark": "#A86F31",
        charcoal: "#0E0F0F",
      },
      boxShadow: {
        soft: "0 22px 70px rgba(13, 13, 13, 0.075)",
        card: "0 12px 34px rgba(13, 13, 13, 0.055)",
      },
    },
  },
  plugins: [],
};

export default config;
