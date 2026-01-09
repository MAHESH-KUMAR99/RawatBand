/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9A565', // Gold/Beige accent color
        secondary: '#8B7355', // Secondary brown/tan
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
