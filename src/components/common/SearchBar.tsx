import React from 'react';

const SearchBar = ({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`h-[38px] w-full rounded-[20px] border border-textGray1 bg-backgroundGray px-4 text-black placeholder-textGray1 outline-none ${className}`}
    />
  );
};

export default SearchBar;
