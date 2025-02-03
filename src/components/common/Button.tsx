import React from 'react';

type ButtonProps = {
  theme?: 'gray' | 'green' | 'red';
  size?: 'small' | 'large';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  theme = 'gray', // 기본값 gray
  size = 'small', // 기본값 small
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'transition-all font-pmedium';
  const disabledStyles = 'bg-backgroundGray text-textGray1';

  const buttonTheme = {
    gray: 'bg-textGray1 text-backgroundWhite hover:bg-textGray2',
    green: 'bg-pointColor text-titleBlack hover:bg-backgroundGreen',
    red: 'bg-[#E7564C] text-backgroundWhite hover:bg-[#D04338]',
  };

  const sizeStyles = {
    small:
      'h-[21px] px-[6px] py-[4px] text-[11px] rounded-[30px] leading-[13.13px]',
    large:
      'h-[34px] px-[16px] py-[8px] text-[15px] rounded-[6px] leading-[13.13px]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${
        disabled ? disabledStyles : buttonTheme[theme]
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
