import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores profissionais - tons terrosos e elegantes
        primary: {
          50: '#f8f5f0',
          100: '#eee9dd',
          200: '#d9cdb5',
          300: '#c2ae89',
          400: '#ae9166',
          500: '#9c7c52', // Cor principal - marrom elegante
          600: '#8a6849',
          700: '#73543e',
          800: '#5c4333',
          900: '#4a362a',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#e9edf2',
          200: '#d1d8e3',
          300: '#a9b7cb',
          400: '#7b90af',
          500: '#5e7496', // Azul elegante
          600: '#4a5c7d',
          700: '#3d4a66',
          800: '#353f55',
          900: '#2f3748',
        },
        accent: {
          50: '#fef6ee',
          100: '#fdead7',
          200: '#fbd0ae',
          300: '#f8b07a',
          400: '#f38644', // Laranja terroso
          500: '#f16a20',
          600: '#e25416',
          700: '#bc4114',
          800: '#963618',
          900: '#792e17',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
