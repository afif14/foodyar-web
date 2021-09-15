const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      textColor: {
        'primary' : '#272042',
        'secondary' : '#8B8BA5',
        'spesial' : '#F7C531'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
