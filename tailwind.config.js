/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        allison: ["Allison", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        gold: "#d9b76b",
      },
      keyframes: {
        fadeInTopRight: {
          "0%": { transform: "translate(50px, -50px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      animation: {
        fadeInTopRight: "fadeInTopRight 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
