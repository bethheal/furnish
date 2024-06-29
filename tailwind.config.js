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
        blue:"#052C43"
      }
    },
  },
  plugins: [],
}

