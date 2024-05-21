/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
      }),
      colors: {
        'top-left': '#d0edfc',
        'bottom-right': '#e2e0d7',
      },
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/postcss7-compat'),
  ],
}