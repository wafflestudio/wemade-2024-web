import React, { useState } from 'react';

const BigButton = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex h-12 w-full flex-shrink-0 items-center justify-center">
      <button
        className={`h-10 w-full cursor-pointer rounded-md border border-none transition-colors duration-300 ${
          isHovered
            ? 'bg-[#35C273] text-[#000000]'
            : 'bg-[#F6F4F1] text-[#9F9A94]'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center font-['Pretendard'] text-[15px] font-semibold">
          {text}
        </div>
      </button>
    </div>
  );
};

export default BigButton;
