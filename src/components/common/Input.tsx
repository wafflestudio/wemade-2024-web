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
        'box-border w-full rounded-[4px] border border-borderGray bg-white px-2 text-sm font-normal text-black placeholder-textGray1 outline-none focus:border-[1.5px] focus:border-pointColor',
        className
      )}
    />
  );
};

export default Input;
