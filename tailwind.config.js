/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#F5B025",
          goldLight: "#FDE68A",
          green: "#4E7C38",
          leafGreen: "#76A035",
          softGreen: "#E8F5E9",
          blue: "#3876E0",
          skyBlue: "#E0F2FE",
          orange: "#EE6C4D",
          softOrange: "#FFEDD5",
          cream: "#FAF8F5",
          brown: "#4A3525",
          dark: "#1A1A1A"
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        dmserif: ['DM Serif Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cinzeldec: ['Cinzel Decorative', 'serif'],
        bodoni: ['Bodoni Moda', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        marcellus: ['Marcellus', 'serif'],
        prata: ['Prata', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(78, 124, 56, 0.15)',
        'card-hover': '0 25px 50px -12px rgba(245, 176, 37, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
