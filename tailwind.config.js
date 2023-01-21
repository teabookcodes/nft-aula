/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aulaBg: "#F1F2F4",
        aulaGray: "#0B0C0D",
        aulaBlack: "#6366F1",
      },
    },
  },
  plugins: [],
};
