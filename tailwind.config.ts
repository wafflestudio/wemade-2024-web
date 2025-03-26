/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        40: '40px',
        30: '30px',
        26: '26px',
        22: '22px',
        18: '18px',
        16: '16px',
        15: '15px',
        14: '14px',
        13: '13px',
        12: '12px',
        11: '11px',
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
      },
      colors: {
        pointColor: '#19F078',
        lightGreen: '#D1FCE4',
        borderGray: '#DAD3CB',
        textGray1: '#9F9A94',
        textGray2: '#7B7773',
        textGreen: '#33DB7D',
        backgroundGray: '#F6F4F1',
        hoverGray: '#EBE6E0',
        backgroundUnselected: '#EBE6E0',
        backgroundSelected: '#FBF9F8',
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
