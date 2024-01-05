/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // header: 'rgba(250, 250, 2504, .60)',
        header: 'rgba(138, 114, 86, .85)',
        text: '#393d42',
        gray: '#6a6e73',
        'gray-light': '#9fa3a9',
        white: '#ffffff',
        gold: '#8a7256',
        village: '#dadbd5',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui'],
        'title': ['Gilda Display', 'ui-serif', 'system-ui'],
      }
    },
  },
  
}

