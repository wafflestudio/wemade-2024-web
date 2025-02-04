/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        pointColor: '#19F078',
        borderGray: '#DAD3CB',
        textGray1: '#9F9A94',
        textGray2: '#7B7773',
        textGreen: '#33DB7D',
        backgroundGray: '#F6F4F1',
        backgroundGreen: '#35C274',
        errorRed: '#EC3737',
      },
    },
  },
  plugins: [],
};
