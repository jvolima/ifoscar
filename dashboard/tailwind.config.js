/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'silver': '#c0c0c0',
      'gold': '#DAA520',
      'bronze': '#CD7F32',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': '#FD2424',
      'yellow': {
        700: '#9D8600',
        500: '#DFCA4E',
      },
      'blue': {
        450: '#52A1E9',
        350: '#64B9D0',
        250: '#66B4CC',
      },
      'purple': {
        750: '#716F9C',
      },
      'gray': {
        950: '#202023',
        900: '#29292e',
        850: '#2E2E33',
        700: '#7C7C8A',
        450: '#646783',
        400: '#C4C4CC',
        350: '#CFCFD0',
        150: '#E9E9E9'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}