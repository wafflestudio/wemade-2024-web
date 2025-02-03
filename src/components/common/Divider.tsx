import React from 'react';

const Divider = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`h-[1px] w-full bg-borderGray ${className}`}
      {...props}
    />
  );
};

export default Divider;
