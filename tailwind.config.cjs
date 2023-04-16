/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spoty: "#3eb025",
      },
      backgroundImage: {
        "myImg": "url('./src/hotel4.jpg')",
     
      },
    },
  },
  plugins: [],
};
