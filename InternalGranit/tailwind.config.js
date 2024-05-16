/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  container: {
    center: true
  },

  theme: {
    fontFamily: {
      ruso: ['Russo One', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'open-sans-bold': ['Open Sans Bold', 'sans-serif'],
      'open-sans-light': ['Open Sans Light', 'sans-serif']
    },
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        sidebar: '#216EC4',
        background: '#F4F6FA'
      }
    }
  },

  plugins: []
}
