/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: { DEFAULT: '#2c3035', hover: '#353c43', line: '#454c53', outline: '#747e87' },
        accent: { 200: '#ffdfb7', 300: '#f2c48d', 400: '#ebbc8e', 500: '#bd8c60', 600: '#8c5934' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
