/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#080A1A",
        submain:"#F20000",
        dry:"#0B0F29",
        star:"#FFB000",
        text:"#C0C0C0",
        border:"#4b5563",
        dryGray:"#E0O5D5",
        }
     
    },
  },
  plugins: [],
}