import React, { useState } from 'react';

const LoginButton = ({ text }: { text: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex h-12 w-full flex-shrink-0 items-center justify-center">
      <button
        className={`cursor-pointer rounded-md border border-borderGrey px-[73.5px] py-[9px] ${
          isClicked ? 'bg-backgroundGrey' : 'bg-backgroundWhite'
        }`}
        onClick={handleClick}
      >
        <div className="text-[15px] text-titleBlack">{text}</div>
      </button>
    </div>
  );
};

export default LoginButton;
