/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '540':'540px',
        '768':'768px',
        '912': '912px', 
        '820':'820px',
        '1024':'1024px',
        '1280':'1280px',
        // Custom breakpoint for 912px
      },
    },
  },
  plugins: [],
}

