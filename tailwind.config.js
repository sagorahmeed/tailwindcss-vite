const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: '576px' },
      // => @media (max-width: 576px) { ... }
      sm: { min: '768px' },
      // => @media (max-width: 768px) { ... }
      md: { min: '992px' },
      // => @media (max-width: 992px) { ... }
      lg: { min: '1200px' },
      // => @media (max-width: 1200px) { ... }
    },
    extend: {
      spacing: {
        space5: '0.5rem',
        space8: '0.8rem',
        space12: '1.2rem',
        space16: '1.6rem',
        space20: '2rem',
        space24: '2.4rem',
        space28: '2.8rem',
        space32: '3.2rem',
        space34: '3.4rem',
        space40: '4rem',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      dancing: ['Dancing Script', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
