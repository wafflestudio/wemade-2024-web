import React from 'react';

const Input = ({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`box-border h-[29px] w-full rounded-[4px] border border-borderGray bg-white px-2 text-sm font-normal text-black placeholder-textGray1 outline-none focus:border-[1.5px] focus:border-pointColor ${className}`}
    />
  );
};

export default Input;
