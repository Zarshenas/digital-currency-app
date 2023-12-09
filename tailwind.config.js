/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainbg':'#2b2b2b',
        'secondbg':'#3B3B3B',
        'deftext':'#ffffff',
        'captext' : '#858584',
      },
    },
  },
  plugins: [],
}

