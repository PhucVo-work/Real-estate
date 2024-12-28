/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        6: '6px',
      },
      colors: {
        brandColor: {
          50: "#efeefa",
          100: "#deddf5",
          200: "#bdbaeb",
          300: "#9d98e1",
          400: "#7c75d7",
          500: "#5b53cd",
          600: "#4942a4",
          700: "#37327b",
          800: "#242152",
          900: "#121129"
        }
      }
    },
  },
  plugins: [],
};
