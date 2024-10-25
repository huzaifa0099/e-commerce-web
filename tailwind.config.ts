import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        "Black": "#1e2832",
        "PrimaryBG" : "#1e28320d"
      },
      fontFamily:{
        'Primary': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
