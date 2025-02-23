import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

import { cn } from '@/utils/cn';

const sortOrderVariants = cva(
  'w-25 h-8 px-3 py-1 flex items-center justify-center rounded-md  text-sm font-medium text-black border border-solid border-textGreen transition-all bg-white',
  {
    variants: {
      state: {
        default: '',
        selected: '',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

interface SortOrderProps extends VariantProps<typeof sortOrderVariants> {
  onSelect: (value: string) => void;
  selectedValue: string;
  options: string[];
}
const SortOrder = ({ onSelect, selectedValue, options }: SortOrderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Sort Button */}
      <button
        className={cn(
          sortOrderVariants({ state: isOpen ? 'selected' : 'default' })
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => !isOpen && setIsOpen(true)}
      >
        {selectedValue}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute left-0 mt-1 rounded-md border border-solid border-textGreen bg-white text-sm font-medium text-black shadow-md">
          {options.map((option) => (
            <button
              key={option}
              className={cn(
                'flex h-8 w-full items-center justify-start px-3 py-1 hover:bg-backgroundGray',
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
