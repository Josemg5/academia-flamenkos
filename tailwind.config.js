/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanta: '#000000',
        abyss: '#030303',
        bone: {
          DEFAULT: '#E5E5E5',
          muted: '#8A8A8A',
          dark: '#4A4A4A'
        },
        carmine: {
          DEFAULT: '#990000',
          bright: '#CC0000',
          dark: '#550000',
          glow: 'rgba(204, 0, 0, 0.35)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
