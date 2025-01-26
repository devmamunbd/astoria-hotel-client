/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust based on your file structure
    theme: {
      extend: {
        colors: {
          bgPrimary: '#F7F8F9',
          primary: '#222222',
          accent: '#34495E',
        },
      },
    },
    plugins: [],
  };
