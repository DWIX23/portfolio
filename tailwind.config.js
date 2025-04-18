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
      },
      animation: {
        'gradient-loop': 'gradientLoop 15s linear infinite',
      },
      keyframes: {
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
      animation: {
        wave: 'wave 2s ease-in-out infinite',
        'gradient-loop': 'gradientLoop 15s linear infinite',
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
