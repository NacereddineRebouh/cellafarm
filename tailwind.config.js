/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {

      'zero': '1px',
      // => @media (min-width: 640px) { ... }
      'sm': '620px',
      // => @media (min-width: 640px) { ... }
 
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1330px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1586px',
      // => @media (min-width: 1536px) { ... }
     
      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }

      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }
  },
    extend: {
      dropShadow: {
        'small': '0 10px 8px rgb(252, 217, 189, 0.95)',
        'small2': '0 10px 8px rgb(167, 243 ,208 , 0.8)',
        'small3Yellow': '0px 2px 8px rgb(251 ,200 ,36 , .4)',
        'small2Yellow': '0px 1px 5px rgb(251 ,200 ,36 , .3)',
        'small2Stone': '0px 1px 5px rgb(250 ,250 ,249 , .3)',
        'small3Stone': '0px 2px 8px rgb(250 ,250 ,249 , .4)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
      sans: ['var(--font-inter)', defaultTheme.fontFamily.sans],

    },
      keyframes: {
        ping2: {
          '0%, 100% ':{
            transform: 'scale(1.2)',
            opacity:.9
          },
        },
        pulse2:{
          '0%, 100%' :{
            transform: 'scale(1)',
            opacity: 1
          },
          '50%' :{
            transform: 'scale(1.2)',
            opacity: .5
          },

        },
        bounce2:{
          '0%' :{
            transform: 'translateY(0px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
          },
          '50%' :{
            transform: 'translateY(20px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.3)',
          },
          '100%' :{
            transform: 'translateY(0px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
          },
        }
      },
      animation: {
      'spin-slow': 'spin 15s linear infinite',
      'ping-nofade': 'ping2 2.2s linear infinite',
      'pulseLong':'pulse2 5s ease-in-out infinite',
      'pulseC':'pulse2 5s ease-in infinite',
      'Hover':'bounce2 6s ease-in-out infinite'
    },
    objectPosition: {
      'center-bottom': '50% 70%',
    }},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("flowbite/plugin"),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    // ...
  ],
}
