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
    },
  },
  plugins: [],
};
