/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // se tiver pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // se tiver src
  ],
   theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c5f2d',
          dark: '#1e4620',
          light: '#3d7a3e',
        },
        accent: {
          DEFAULT: '#ff6b35',
          dark: '#e85a2a',
          light: '#ff8254',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};