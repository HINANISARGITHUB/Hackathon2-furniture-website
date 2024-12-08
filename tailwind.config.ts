import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '3pct' : '3%'
      },

      fontFamily: {
        inter: ['Inter','sans-serif'],
      },
      backgroundImage: {
        "gradiant-radial": "radiant-gradial(var(--tw-gradient-stops))",
        "gradiant-conic": "conic-gradiant(from 18deg at 50% 50%, var(--tw-gradiant-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
