var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind.config.js'),
    require('autoprefixer'),
  ]
}