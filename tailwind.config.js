/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: 'rgba(54, 49, 48, .85)',
        text: '#232020',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
      marquee2: 'marquee2 25s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ], 
}

