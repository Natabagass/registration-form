/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'vsm': '375',
        'desk': '1440'
      },
      fontFamily:{
        "Rajdhani" : "Rajdhani",
        "Cairo" : "Cairo"
      }
    },
  },
  plugins: [],
}