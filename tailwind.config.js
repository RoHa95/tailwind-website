/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily:{
        sans:["vazir"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy:"base"
    })
  ],
};
