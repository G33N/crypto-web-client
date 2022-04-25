
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          white: {
              DEFAULT: '#ffffff',
          },
          primary: {
              light: '#a59c9c',
              DEFAULT: '#000000',
              dark: '#ffffff',
              darker: '#4c4848',
          },
          secondary: {
              light: '#FFEBDA',
              DEFAULT: '#F66A0A',
              dark: '#A04100',
          },
          warning: {
              DEFAULT: '#D1711C',
          }
      },
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
