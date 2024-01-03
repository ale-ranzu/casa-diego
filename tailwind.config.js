/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: 'rgba(250, 250, 2504, .60)',
        text: '#393d42',
        gray: '#6a6e73',
        'gray-light': '#9fa3a9',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui'],
        'title': ['Gilda Display', 'ui-serif', 'system-ui'],
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

