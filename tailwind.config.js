/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A3FFC",
        secondary: "#6c63ff2e",
        gainsboro: "#DCDCDC",
        whitesmoke: "#F5F5F5",
      },
      fontFamily: {
        Inter: ["Inter, sans-serif"],
      },
    },
  },
  plugins: [],
};
