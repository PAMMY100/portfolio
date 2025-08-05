import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if using src directory
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'Courier New', 'monospace'],
        'fira-code': ['var(--font-fira-code)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: "class", // Since you're using .dark class
};

export default config;