/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['UnifrakturMaguntia', 'serif'],
        cook: ['UnifrakturCook', 'serif'],
        pirata: ['Pirata One', 'cursive'],
        medieval: ['MedievalSharp', 'cursive'],
        almendra: ['Almendra Display', 'serif'],
        blackchancery: ['BlackChancery', 'serif'],
        deutschgothic: ['Deutsch Gothic', 'serif'],
        gothicultra: ['Gothic Ultra OT', 'serif'],
        oldenglish: ['Old English Text MT', 'serif'],
        gothictextura: ['Gothic Textura', 'serif'],
        fraktur: ['Fraktur', 'serif'],
      },},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
