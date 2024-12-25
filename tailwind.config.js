/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"],
      },

      colors: {
        primary: {
          light: "#fff",
          dark: "#000",
        },
      },
    },
  },
  plugins: [],
};
