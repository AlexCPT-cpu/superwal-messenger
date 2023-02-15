/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--accent) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        edge: "rgb(var(--edge) / <alpha-value>)",
        gray: 'rgb(var(--gray) / <alpha-value>)',
        orange: 'rgb(var(--orange) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};