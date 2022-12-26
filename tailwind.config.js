/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#022147',
        'secondary': '#F74F22',
        'dark': '#767e88',
        'light': '#efefef',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        'card': '8px 6px 10px rgba(200,200,200,0.1)',
      },
      backgroundImage: {
        'home-hero': "url('/assets/img/banner/1.jpg')",
        'contactbg': "url('/assets/img/banner/bg1.jpg')",
        'support': "url('/assets/img/textures/abstract2.png')",
      }
    },
  },
  plugins: [],
}