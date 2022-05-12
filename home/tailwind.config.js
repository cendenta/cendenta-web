const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-orange': '#D88839',
      'light-orange': '#E4AD78',
      'light-gray': '#DBE0EA', //F9FCFD
      'med-gray': '#7684A0',
      'med-blue-gray': '#657493',
      'dark-blue-gray': '#58688A'
    },
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
};