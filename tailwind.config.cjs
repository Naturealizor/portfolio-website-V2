/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          '1000': '#0067b2',
        },
        green: {
          '1000': '#51b948',
        }
      },
    },
  },
  plugins: [],
}
