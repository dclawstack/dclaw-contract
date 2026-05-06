import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1E3A5F",
      },
    },
  },
  plugins: [],
};

export default config;
