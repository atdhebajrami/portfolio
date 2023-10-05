/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    colors: {
      primary: "#66A182",
      secondary: "#CAFFB9",
      tertiary: "#AEF78E",
      quaternary: "#C0D461",
      background: '#2E4057',

      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: '#808080',
      lightgray: '#ECECEC',
      darkgray: '#333333',
      darkerwhite: '#F9F9F9',

      error: '#F2542D',
      warning: '#FF7115',
      
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      emerald: colors.emerald,
      violet: colors.violet,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
    },
    backgroundPosition: {
      bottom: 'bottom',
      'left-74': 'center left 74%',
      'left-54': 'center left 54%',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
