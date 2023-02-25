/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorDark: "#090E34",
        colorPrimary: "#3056D3",
        colorSecondary: "#13C296",
        colorText: "#637381",
      },
    },
  },
  plugins: [],
};
