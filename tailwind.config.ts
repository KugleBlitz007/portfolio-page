import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", // <- required
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", // <- required
  ],
  theme: {},
  plugins: [],
});

export default config;
