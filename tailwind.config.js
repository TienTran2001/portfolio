/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        bgColor: "#1f1f38",
        "white-800": "#ededed",
        bgVariant: "#2c2c6c",
        primary: "#4db5ff",
        primaryVariant: "rgba(77,181,255,0.4)",
        light: "255,255,255, 0.6",
      },
    },
  },
  plugins: [],
};
