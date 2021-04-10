module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#73073c',
        secondary: '#2504c7',
        kollane: '#ffab15',
        lilla: '#6c0269',
        tlilla: '#380040',
        oranz: '#ff5c49',
        taust: '#1a001d',
      },
      fontFamily: {
        sans: ['"Tisa Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
