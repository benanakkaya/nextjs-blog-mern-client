/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        customGreen: "#02A28F",
        customGray: "#CCCCCC"
      },
      container:{
        center: true
      }
    },
  },
  plugins: [],
}
