const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {    
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      red: colors.red,
      white: colors.white,
      black: colors.black,
      'dark-orange': '#D88839',
      'light-orange': '#E4AD78',
      'light-gray': '#DBE0EA', //F9FCFD
      'med-gray': '#7684A0',
      'med-blue-gray': '#657493',
      'dark-blue-gray': '#58688A'
    },
    typography: (theme) => ({}),
    extend: {
      fontFamily: {
        brand: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addVariant }) {
      addVariant('dark-hover', '&:hover')
    })
  ],
};