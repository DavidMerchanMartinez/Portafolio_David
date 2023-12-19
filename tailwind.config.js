/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'celular': {'max': '550px'},
      // => @media (min-width: 640px) { ... }

      'laptop': {'max': '1000px'},
      // => @media (min-width: 1024px) { ... }

      'pc': {'max': '1345px'},
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],

  variants: {
  extend: {
        display: ['responsive', 'hover', 'focus', 'group-hover'],
      },
    },

  
}

