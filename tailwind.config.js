/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        main: "#a16207",
        dark: "#0f172a",
        grey: "#94a3b8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
