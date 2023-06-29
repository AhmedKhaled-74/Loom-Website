/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      circular: ["Circular", "Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#565ADD",
        darkBrand: "#40429D",
        moreDarkBrand: "#3D2E7C",
        veryDarkBrand: "#2B1C50",
        blackBrand: "#111019",
        lightBrand: "#D1D1F7",
        veryLightBrand: "#EFF0FF",
        textBrand: "rgb(108, 102, 132)",
      },
    },
  },
  plugins: [],
};
