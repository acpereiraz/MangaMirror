/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': {'max': '768px'},
        'md-phone': {'max': '1281px'},
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

