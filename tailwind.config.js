/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/public/Banner1.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],

}