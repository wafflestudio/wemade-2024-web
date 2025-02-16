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
        lightGreen: '#D1FCE4',
        borderGray: '#DAD3CB',
        textGray1: '#9F9A94',
        textGray2: '#7B7773',
        textGreen: '#33DB7D',
        backgroundGray: '#F6F4F1',
        backgroundUnselected: '#EBE6E0',
        backgroundGreen: '#35C274',
        errorRed: '#EC3737',
      },
      // Modal에 쓰이는 애니메이션 효과
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '50%': { opacity: '0.5', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.02)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-in-out',
        'fade-out': 'fade-out 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};
