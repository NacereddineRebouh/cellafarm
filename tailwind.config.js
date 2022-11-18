/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          '60%' :{
            transform: 'scale(1.3)',
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
      'spin-slow': 'spin 3s linear infinite',
      'ping-nofade': 'ping2 2.2s linear infinite',
      'pulseLong':'pulse2 5s ease-in-out infinite',
      'pulseC':'pulse2 3s ease-in-out infinite',
      'Hover':'bounce2 6s ease-in-out infinite'
    }},
  },
  plugins: [],
}
