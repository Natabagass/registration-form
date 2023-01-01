/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      screens:{
        'vsm': '375',
        'desk': '1440'
      },
      fontFamily:{
        "Rajdhani" : "Rajdhani",
        "Cairo" : "Cairo"
      },
      boxShadow:{
        'effect': '0px 20px 15px rgba(88, 133, 233, 0.15)'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}