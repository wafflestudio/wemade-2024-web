import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  label: string;
  theme?: 'gray' | 'green' | 'red' | 'white';
  size?: 'small' | 'medium' | 'large';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  label,
  theme = 'gray',
  size = 'small',
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'transition-all';
  const disabledStyles = 'bg-backgroundGray text-textGray1';

  const buttonTheme = {
    gray: 'bg-textGray1 text-white hover:bg-textGray2',
    green: 'bg-pointColor text-black hover:bg-backgroundGreen',
    red: 'bg-[#E7564C] text-white hover:bg-[#D04338]',
    white:
      'bg-white text-black hover:bg-backgroundGray border border-borderGray',
  };

  const sizeStyles = {
    small:
      'h-[21px] px-[6px] py-[4px] text-[11px] rounded-[30px] leading-[13.13px] font-medium',
    medium:
      'h-[34px] px-[16px] py-[8px] text-[15px] rounded-[6px] leading-[13.13px] font-semibold',
    large:
      'h-[36px] w-full px-[16px] py-[8px] text-[15px] rounded-[6px] leading-[17.9px] font-semibold',
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        sizeStyles[size],
        disabled ? disabledStyles : buttonTheme[theme],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
