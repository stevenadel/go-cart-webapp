/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#ed5a62",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default tailwindConfig;
