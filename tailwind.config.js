/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: 'rgba(35, 32, 32, .80)',
        text: '#232020',
        gray: '#756F6F',
        'gray-light': '#C8C6C6',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
    animation: {
      marquee: 'marquee 50s linear infinite',
      marquee2: 'marquee2 50s linear infinite',
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

