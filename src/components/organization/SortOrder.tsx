import { useState } from 'react';

import { cn } from '@/utils/cn';
type SortOrderProps = {
  onSelect: (value: string) => void;
  selectedValue: string;
  options: string[];
};
const SortOrder = ({ onSelect, selectedValue, options }: SortOrderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className={cn(
          'flex h-8 w-[100px] items-center justify-center rounded-md border border-solid border-textGreen bg-white px-3 py-1 text-sm font-medium text-black transition-all',
          isOpen && 'bg-backgroundGray'
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => !isOpen && setIsOpen(true)}
      >
        {selectedValue}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 rounded-md border border-solid border-textGreen bg-white text-sm font-medium text-black shadow-md">
          {options.map((option) => (
            <button
              key={option}
              className={cn(
                'flex h-8 w-[100px] items-center justify-start px-3 py-1 hover:bg-backgroundGray',
                selectedValue === option && 'bg-backgroundUnselected'
              )}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortOrder;
