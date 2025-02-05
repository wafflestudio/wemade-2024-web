import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Icons } from '@/constants/icons.tsx';

interface BackButtonProps {
  linkTo?: string;
  className?: string;
}

const BackButton = ({ linkTo = '-1', className = '' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkTo === '-1') {
      navigate(-1);
    } else if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <div
      className={twMerge(
        'flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-borderGray bg-white transition-colors hover:bg-backgroundGray',
        className
      )}
      onClick={handleClick}
    >
      {Icons.Backward}
    </div>
  );
};

export default BackButton;
