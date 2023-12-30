/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
    },
    backgroundImage: {
      "ffb-orange": ['linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)'],

      "ffb-yellow": ['linear-gradient(0deg, #EFB93B 0%, #EFB93B 100%)'],
      "ffb-darkorange": ['linear-gradient(0deg, #E0480A 0%, #E0480A 100%), linear-gradient(0deg, #EFB93B 0.02%, #EBA43B 53.72%, #E9973B 100.15%)'],
      "ffb-purple": ['linear-gradient(0deg, #6A3DAD 0%, #6A3DAD 100%), linear-gradient(90deg, #2D367D -0.02%, #384CB1 99.91%)'],
      "ffb-pink": ['linear-gradient(0deg, #ED5C83 0%, #ED5C83 100%), linear-gradient(90deg, #2D367D -0.02%, #384CB1 99.91%)'],

      "ffb-unset": ['none'],
    },
    boxShadow: {
      "mybutton": ['inset 0 0 0 1.6em #fff'],
      "mycard": ['inset 0 0 0 7rem #FF983B'],
    },

    extend: {
      backgroundSize: {
        '100%': '100% 80%',
        '100': '100% 100%'
      },
      screens: {
        'min-sm': { 'min': '576px' },
        'max-xl': { 'max': '768px' },
        'max-sm': { 'max': '576px' },

      },
      animation: {
        'myspin': 'spin 15s linear infinite',
        'mywiggle': 'wiggle 30s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { 'border-radius': '30% 70% 70% 30% / 30% 24% 76% 70%' },
          '20%': { 'border-radius': '68% 32% 78% 22% / 62% 24% 76% 38%' },
          '30%': { 'border-radius': '70% 30% 39% 61% / 43% 24% 76% 57%' },
          '40%': { 'border-radius': '29% 71% 77% 23% / 43% 79% 21% 57%' },
          '50%': { 'border-radius': ' 77% 23% 21% 79% / 43% 83% 17% 57%' },
          '60%': { 'border-radius': '77% 23% 80% 20% / 43% 83% 17% 57%' },
          '70%': { 'border-radius': '86% 14% 86% 14% / 12% 83% 17% 88%' },
          '80%': { 'border-radius': '8% 92% 15% 85% / 84% 12% 88% 16%' },
          '90%': { 'border-radius': '54% 46% 74% 26% / 13% 65% 35% 87%' },
          '100%': { 'border-radius': '30% 70% 70% 30% / 30% 24% 76% 70%' },
        },
      }

    },
  },
  plugins: [],
}

