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
        'water-flow-1': 'waterFlow1 20s linear infinite',
        'water-flow-2': 'waterFlow2 25s linear infinite',
        'water-flow-3': 'waterFlow3 30s linear infinite',
        'water-flow-1-mobile': 'waterFlow1Mobile 15s linear infinite',
        'water-flow-2-mobile': 'waterFlow2Mobile 20s linear infinite',
        'water-flow-3-mobile': 'waterFlow3Mobile 25s linear infinite',
        'card-expand': 'cardExpand 0.5s ease-out forwards',
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
        // Simplified desktop animations with larger movements
        waterFlow1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(150px, -75px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        waterFlow2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-150px, 75px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        waterFlow3: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(75px, 150px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        // Simplified mobile animations with larger movements
        waterFlow1Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(75px, -40px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        waterFlow2Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-75px, 40px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        waterFlow3Mobile: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(40px, 75px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
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
