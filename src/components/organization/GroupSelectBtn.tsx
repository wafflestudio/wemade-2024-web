import { useState } from 'react';

import { Icons } from '@/constants/icons';
import { cn } from '@/utils/cn';

type GroupSelectBtnProps = {
  team: string;
};
const GroupSelectBtn = ({ team }: GroupSelectBtnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        'flex items-center gap-1 rounded-md bg-pointColor px-3 py-[5px] text-black hover:bg-backgroundGreen'
      )}
    >
      <span className="text-sm font-medium">{team}</span>
      <span>{isOpen ? Icons.CorporateOpen : Icons.CorporateClose}</span>
    </button>
  );
};

export default GroupSelectBtn;
