/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#a5d4cc',
        primaryblur:'#c6e3df',
        orange:'#face87',
      }
    },
  },
  plugins: [],
}
