/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'scale-up': 'scale-up 2s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40, end)',
      },
    },
  },
  variants: {},
  plugins: [],
 }