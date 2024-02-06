/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rale': ['Raleway', 'sans-serif'],
        'tide': ['High Tide Sans', 'sans-serif'],
        'high': ['High Tide', 'sans-serif'],
      }
    },
  },
  plugins: [],
}