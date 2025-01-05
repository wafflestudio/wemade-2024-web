/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pmedium: ['Pretendard Medium', 'sans-serif'],
        psemibold: ['Pretendard SemiBold', 'sans-serif'],
        isans: ['InfinitySans-RegularA1', 'sans-serif'],
      },
      colors: {
        titleBlack: '#000000',
        pointColor: '#19F078',
        borderGrey: '#DAD3CB',
        textGrey1: '#9F9A94',
        textGrey2: '#7B7773',
        textGreen: '#33DB7D',
        backgroundWhite: '#FFF',
        backgroundGrey: '#F6F4F1',
        backgroundGreen: '#35C274',
        errorRed: '#EC3737',
      },
    },
  },
  plugins: [],
};
