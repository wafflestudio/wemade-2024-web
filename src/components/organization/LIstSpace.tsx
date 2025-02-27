import { cva, VariantProps } from 'class-variance-authority';

import { Icons } from '@/constants/icons.tsx';
import { cn } from '@/utils/cn';

const listSpaceVariants = cva(
  'w-full grid grid-cols-2 px-6 py-[14.5px] h-[66px] rounded-sm border-[0.5px] border-solid border-borderGray bg-white transition-all',
  {
    variants: {
      state: {
        default: '',
        select: 'border-[1.5px] border-pointColor',
      },
      isHovered: {
        true: 'bg-backgroundGray',
      },
    },
    compoundVariants: [
      {
        state: 'default',
        isHovered: true,
        class: 'bg-backgroundGray',
      },
      {
        state: 'select',
        isHovered: true,
        className: 'border-[1.5px] border-pointColor bg-backgroundGray',
      },
    ],
    defaultVariants: {
      state: 'default',
      isHovered: false,
    },
  }
);

interface ListSpaceProps extends VariantProps<typeof listSpaceVariants> {
  name: string;
  company: string;
  department: string;
  position: string;
  onClick?: () => void;
  isHovered?: boolean;
}

const ListSpace = ({
  name,
  company,
  department,
  position,
  state = 'default',
  isHovered = false,
  onClick,
}: ListSpaceProps) => {
  return (
    <div
      className={cn(listSpaceVariants({ state, isHovered }))}
      onClick={onClick}
    >
      <div className="flex items-center justify-start gap-4">
        <div>{Icons.LineListSpace}</div>
        <span className="text-base font-semibold">{name}</span>
      </div>

      <div className="text-left text-sm font-medium">
        <p className="text-textGray1">{company}</p>
        <div className="flex items-center gap-1.5 text-textGray2">
          {department}
          <span>{Icons.Dot}</span> {position}
        </div>
      </div>
    </div>
  );
};

export default ListSpace;
