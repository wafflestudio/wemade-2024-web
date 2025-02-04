import { useNavigate } from 'react-router-dom';

import { Icons } from '@/constants/icons.tsx';

const BackButton = ({ linkTo = '-1' }: { linkTo?: string }) => {
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
      className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-borderGray bg-white transition-colors hover:bg-backgroundGray"
      onClick={handleClick}
    >
      {Icons.Backward}
    </div>
  );
};

export default BackButton;
