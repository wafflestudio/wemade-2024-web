const LoginButton = ({
  text,
  onClick,
  isClicked,
}: {
  text: string;
  onClick: () => void;
  isClicked: boolean;
}) => {
  return (
    <div className="flex h-12 w-full flex-shrink-0 items-center justify-center">
      <button
        className={`cursor-pointer rounded-md border border-borderGray px-[73.5px] py-[9px] ${
          isClicked ? 'bg-backgroundGray' : 'bg-backgroundWhite'
        }`}
        onClick={onClick}
      >
        <div className="text-[15px] text-titleBlack">{text}</div>
      </button>
    </div>
  );
};

export default LoginButton;
