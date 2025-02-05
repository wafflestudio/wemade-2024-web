import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={twMerge(
        'box-border w-full rounded-[4px] border border-borderGray bg-white px-[10px] py-[10px] text-sm font-normal text-black placeholder-textGray1 outline-none',
        'focus:border-[1.5px] focus:border-pointColor focus:px-[9.5px] focus:py-[9.5px]',
        className
      )}
    />
  );
};

export default Input;
