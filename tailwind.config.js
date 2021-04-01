module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#73073c',
        secondary: '#2504c7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
