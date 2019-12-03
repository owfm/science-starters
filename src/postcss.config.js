const tailwindcss = require('tailwindcss');

module.exports = {
  // eslint-disable-next-line global-require
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
