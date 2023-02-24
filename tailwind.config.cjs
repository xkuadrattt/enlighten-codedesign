/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0A1B59",
        accent: "#113FE2",
      },
      fontSize: {
        "5xl": "44px",
      },
      gridTemplateColumns: {
        layout: "60% 40%",
      },
      backgroundImage: {
        imgprimary: "url(/src/assets/img/imgdiscuse.png)",
      },
    },
  },
  plugins: [],
};
