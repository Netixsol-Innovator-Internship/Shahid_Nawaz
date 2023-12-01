/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode:"jit",
  // purge:["./src/index.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "backgraound-color":"#fafafa",
        "primary-color":'#141414',
        "secondary-color":'#d1d1d1'
      },
      height:{
        'screen-75':'90vh'
      },
       fontFamily:{

       }
    },
  },
  plugins: [],
}