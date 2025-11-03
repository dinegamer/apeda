/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {}, // (les couleurs sont gérées via variables CSS ci-dessus)
  },
  plugins: [require('tailwindcss-animate')],
};
