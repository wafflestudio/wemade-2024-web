import { cva, VariantProps } from 'class-variance-authority';

import EditBtn from './EditBtn';

import { cn } from '@/utils/cn';

const unclassifiedGroupRowVariants = cva(
  'whitespace-nowrap w-full flex h-9 items-center py-2.5 pr-2 pl-3.5 gap-1 border-b border-solid border-borderGray text-sm font-medium  hover:bg-backgroundGray transition-all text-textGray2',
  {
    variants: {
      state: {
        default: 'bg-white ',
        hold: 'bg-[rgba(25,240,120,0.2)]',
        unselected: 'bg-backgroundUnselected',
        selected: 'text-backgroundGreen bg-backgroundSelected',
      },
    },

    defaultVariants: {
      state: 'default',
    },
  }
);

interface UnclassifiedGroupRowProps
  extends VariantProps<typeof unclassifiedGroupRowVariants> {
  isEdit?: boolean;
  selectedTId: number | null;
  setSelectedTId: (tId: number) => void;
}
const UnclassifiedGroupRow = ({
  isEdit = false,
  setSelectedTId,
  selectedTId,
}: UnclassifiedGroupRowProps) => {
  const state = selectedTId == -1 ? 'selected' : 'default';
  const handleClick = () => {
    setSelectedTId(-1);
  };

  return (
    <>
      <div
        className={cn(
          unclassifiedGroupRowVariants({
            state,
          })
        )}
        onClick={handleClick}
      >
        <span className="flex-1">미분류 그룹</span>
        {isEdit && (
          <EditBtn
            onClick={() => {}}
            text="수정됨"
          />
        )}
      </div>
    </>
  );
};

export default UnclassifiedGroupRow;
