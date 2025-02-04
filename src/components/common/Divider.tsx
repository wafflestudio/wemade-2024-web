import React from 'react';
import { twMerge } from 'tailwind-merge';

const Divider = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge('h-[1px] w-full bg-borderGray', className)}
      {...props}
    />
  );
};

export default Divider;
