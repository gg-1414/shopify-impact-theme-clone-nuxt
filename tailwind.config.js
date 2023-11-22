/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./pages/**/*.vue"],
  theme: {
    extend: {},
    screens: {
      sm: "700px",
      md: "1000px",
      lg: "1150px",
      xl: "1400px",
    },
  },
  plugins: [],
};
