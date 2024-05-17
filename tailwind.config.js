/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    screens: {
      sm: "620px",
      md: "768px",
      lg: "860px",
      xl: "1120px",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};
