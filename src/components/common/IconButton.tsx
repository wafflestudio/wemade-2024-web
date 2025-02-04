import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

const IconButton = ({
  className = '',
  children,
  disabled = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={twMerge(
        'flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white p-[8px] transition-colors hover:bg-[#EBE6E0] disabled:cursor-default disabled:bg-white',
        disabled ? 'text-borderGray' : 'text-textGray2',
        className
      )}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children as ReactElement, {
            className: twMerge(
              (children as ReactElement).props.className,
              'fill-inherit'
            ),
          })
        : children}
    </button>
  );
};

export default IconButton;
