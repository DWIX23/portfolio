// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // screens: {
      //   'sm': '320px',  // small screens
      //   'md': '768px',  // medium screens
      //   'lg': '1024px', // large screens
      //   'xl': '1280px', // extra large screens
      // },
      colors: {
        'custom-gradient-start': '#38bdf8', // sky-400
        'custom-gradient-middle': '#6366f1', // indigo-500
        'custom-gradient-end': '#d946ef', // fuchsia-600
        'custom-gradient-rose': '#f43f5e', // rose-500
        'custom-gradient-red': '#f87171', // red-500
        primary: { // Adding a primary color palette based on teal
          DEFAULT: '#14b8a6', // teal-500
          'hover': '#0d9488', // teal-600
        },
        'cyan-theme': {
          light: '#67e8f9', // cyan-300
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2', // cyan-600
          'gradient-1': '#22d3ee',
          'gradient-2': '#0ea5e9',
          'gradient-3': '#38bdf8',
          'gradient-4': '#0ea5e9',
          'gradient-5': '#22d3ee',
        }
      },
      animation: {
        'gradient-loop': 'gradientLoop 15s linear infinite',
        wave: 'wave 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-more-delayed': 'float 6s ease-in-out 4s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'water-flow-1': 'waterFlow1 12s linear infinite',
        'water-flow-2': 'waterFlow2 15s linear infinite',
        'water-flow-3': 'waterFlow3 18s linear infinite',
        'water-flow-4': 'waterFlow4 14s linear infinite',
        'water-flow-5': 'waterFlow5 16s linear infinite',
        'water-flow-1-mobile': 'waterFlow1Mobile 10s linear infinite',
        'water-flow-2-mobile': 'waterFlow2Mobile 12s linear infinite',
        'water-flow-3-mobile': 'waterFlow3Mobile 14s linear infinite',
        'water-flow-4-mobile': 'waterFlow4Mobile 11s linear infinite',
        'water-flow-5-mobile': 'waterFlow5Mobile 13s linear infinite',
        'card-expand': 'cardExpand 0.5s ease-out forwards',
        'shape-float': 'shapeFloat 8s ease-in-out infinite',
        'shape-rotate': 'shapeRotate 12s linear infinite',
        'shape-scale': 'shapeScale 10s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        gradientLoop: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '200% 50%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        waterFlow1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(150px, -75px) rotate(90deg) scale(1.2)' },
          '50%': { transform: 'translate(75px, 150px) rotate(180deg) scale(0.8)' },
          '75%': { transform: 'translate(-75px, -150px) rotate(270deg) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(-150px, 75px) rotate(120deg) scale(0.9)' },
          '66%': { transform: 'translate(120px, -120px) rotate(240deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow3: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-120px, 60px) rotate(-90deg) scale(1.15)' },
          '50%': { transform: 'translate(90px, 120px) rotate(-180deg) scale(0.85)' },
          '75%': { transform: 'translate(120px, -90px) rotate(-270deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(-360deg) scale(1)' },
        },
        waterFlow4: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(135px, 90px) rotate(120deg) scale(1.2)' },
          '66%': { transform: 'translate(-105px, -105px) rotate(240deg) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow5: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-90px, -120px) rotate(90deg) scale(0.85)' },
          '50%': { transform: 'translate(150px, 60px) rotate(180deg) scale(1.15)' },
          '75%': { transform: 'translate(-60px, 90px) rotate(270deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        // Mobile-optimized animations with larger movements
        waterFlow1Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(75px, -40px) rotate(90deg) scale(1.2)' },
          '50%': { transform: 'translate(40px, 75px) rotate(180deg) scale(0.8)' },
          '75%': { transform: 'translate(-40px, -75px) rotate(270deg) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow2Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(-75px, 40px) rotate(120deg) scale(0.9)' },
          '66%': { transform: 'translate(60px, -60px) rotate(240deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow3Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-60px, 30px) rotate(-90deg) scale(1.15)' },
          '50%': { transform: 'translate(45px, 60px) rotate(-180deg) scale(0.85)' },
          '75%': { transform: 'translate(60px, -45px) rotate(-270deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(-360deg) scale(1)' },
        },
        waterFlow4Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(68px, 45px) rotate(120deg) scale(1.2)' },
          '66%': { transform: 'translate(-53px, -53px) rotate(240deg) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        waterFlow5Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-45px, -60px) rotate(90deg) scale(0.85)' },
          '50%': { transform: 'translate(75px, 30px) rotate(180deg) scale(1.15)' },
          '75%': { transform: 'translate(-30px, 45px) rotate(270deg) scale(1.2)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg) scale(1)' },
        },
        cardExpand: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        shapeFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
        shapeRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shapeScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        'text-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'text': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'text-lg': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      scrollBehavior: ['smooth', 'responsive'],
    },
    variants: {
      extend: {
        scrollBehavior: ['smooth', 'responsive'],
        textShadow: ['responsive'],
        dropShadow: ['responsive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
  corePlugins: {
    scrollBehavior: true,
  }
};
