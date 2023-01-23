/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#202020",
        tertiary: "#ff0000",
        blackRgba: "rgba(0, 0, 0, 0.54)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
