import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

import EditBtn from './EditBtn';

import { Icons } from '@/constants/icons';
import { cn } from '@/utils/cn';

const groupRowVariants = cva(
  'whitespace-nowrap w-full flex h-9 items-center py-2.5 pr-2 gap-1 border-b border-solid border-borderGray text-sm font-medium text-black',
  {
    variants: {
      hasChildren: {
        true: '',
        false: 'pl-3.5',
      },
      hasUpperOrg: {
        true: '',
        false: '',
      },
      isEdit: {
        true: '',
        false: '',
      },
      level: {
        1: 'pl-6', // w/o upper org
        2: 'pl-6', // with upper org
        3: 'pl-11',
        4: 'pl-16',
        5: 'pl-21',
      },
      state: {
        default: 'bg-white ',
        hover: 'bg-backgroundGray',
        hold: 'bg-[rgba(25,240,120,0.2)]',
        unselected: 'bg-backgroundUnselected',
        selected: 'text-backgroundGreen',
      },
    },

    defaultVariants: {
      hasChildren: false,
      hasUpperOrg: false,
      level: 1,
      state: 'default',
    },
  }
);

interface GroupRowProps extends VariantProps<typeof groupRowVariants> {
  name: string;
}

const GroupRow = ({
  name,
  hasChildren = false,
  hasUpperOrg = false,
  level = 1,
  state = 'default',
  isEdit = false,
}: GroupRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        groupRowVariants({ hasChildren, hasUpperOrg, level, state })
      )}
    >
      <div
        className={cn({
          'pr-1': hasUpperOrg && !hasChildren,
        })}
      >
        {hasUpperOrg && Icons.Line}
      </div>
      {hasChildren && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn('px-1 transition-transform', {
            'rotate-180': isExpanded,
          })}
        >
          {Icons.TriangleButton}
        </button>
      )}
      <span className="flex-1">{name}</span>
      {isEdit && (
        <EditBtn
          onClick={() => {}}
          text="수정됨"
        />
      )}
    </div>
  );
};

export default GroupRow;
