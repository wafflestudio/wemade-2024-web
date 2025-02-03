import { useNavigate } from 'react-router-dom';

type TagProps = {
  label: string;
  isPosition?: boolean;
  linkTo?: string;
};

const Tag = ({ label, isPosition = false, linkTo }: TagProps) => {
  const navigate = useNavigate();

  const baseStyles =
    'h-[26px] inline-block cursor-pointer rounded-md px-3 py-[5px] font-pmedium leading-[16.71px] transition-colors';

  const colorStyles = isPosition
    ? 'bg-black text-white'
    : 'bg-pointColor text-black hover:bg-backgroundGreen';

  const handleClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <div
      className={`${baseStyles} ${colorStyles} ${isPosition ? 'pointer-events-none' : ''}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Tag;
