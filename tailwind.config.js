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
      },
      animation: {
        'gradient-loop': 'gradientLoop 15s linear infinite',
        wave: 'wave 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',
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
      },
      scrollBehavior: ['smooth', 'responsive'],
    },
    variants: {
      extend: {
        scrollBehavior: ['smooth', 'responsive'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  }
};
