/** @type {import('postcss').Postcss} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},  // ← MUDOU AQUI
    autoprefixer: {},
  },
};

export default config;