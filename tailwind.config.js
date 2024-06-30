/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        wine:"#773A49",
        ash:"#ABAAAB",
        blue:"#052C43",
        aboutBgColor: "#ffe7e5",
        buttonColor:"#C58967"
      }
    },
  },
  plugins: [],
}

