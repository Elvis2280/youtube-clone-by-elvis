module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      dancing: ['Dancing Script', 'arial', 'cursive'],
    },
    zIndex: {
      '-10': '-10',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
