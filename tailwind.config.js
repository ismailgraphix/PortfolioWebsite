/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1b4c05",
        headingColor: "#081e21",
        smallTextColor: "#4a9a27",
      },
    },
  },
  plugins: [],
};