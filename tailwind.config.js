/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto, sans-serif",
      },

      aspectRatio: {
        myratio: "4/3",
      },
      colors:{
        coffe :"#bada55"
      }
    },
  },
  plugins: [],
};
