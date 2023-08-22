/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      "elements":"1px 5px 15px"
      }
    },
    fontFamily:{
      "nunito-sans":['Nunito Sans', "sans-serif"],
      "roboto":['Roboto', "sans-serif"],
    }
    
  },
  plugins: [],
}

