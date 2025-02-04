import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface TagProps {
  label: string;
  isPosition?: boolean;
  linkTo?: string;
}

const Tag = ({ label, isPosition = false, linkTo }: TagProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <button
      type="button"
      className={twMerge(
        'inline-block h-[26px] cursor-pointer rounded-md px-3 py-[5px] leading-[16.71px] transition-colors',
        isPosition
          ? 'pointer-events-none bg-black text-white'
          : 'bg-pointColor text-black hover:bg-backgroundGreen'
      )}
      onClick={linkTo ? handleClick : undefined}
      disabled={isPosition}
    >
      {label}
    </button>
  );
};

export default Tag;
