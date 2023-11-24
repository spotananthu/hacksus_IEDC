/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#14b3b3',
        secondary: '#24545c',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#343434',
      },
    },
  },
  plugins: [],
};
