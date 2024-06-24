/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: "#5C2DD5",
      backgroundLight: "#7945FF",
      accentOne: "#FECF64",
      accentTwo: "#FB6887",
      textColor: "#FFFFFF",
      subTextColor: "",

    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    }
  },
  plugins: [],
}