import React from 'react';
import { twMerge } from 'tailwind-merge';

const SearchBar = ({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={twMerge(
        'h-[38px] w-full rounded-[20px] border border-textGray1 bg-backgroundGray px-4 text-black placeholder-textGray1 outline-none',
        className
      )}
    />
  );
};

export default SearchBar;
