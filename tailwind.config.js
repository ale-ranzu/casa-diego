/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: 'rgba(54, 49, 48, .90)',
        text: '#232020',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

