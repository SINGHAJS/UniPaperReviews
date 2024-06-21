/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sketch' : "url(/public/images/background-image.jpg)"
      }
    },
  },
  plugins: [],
}