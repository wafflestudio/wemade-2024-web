import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

import EditBtn from './EditBtn';

import { Icons } from '@/constants/icons';
import { useGetTeamDetail } from '@/usecases/organization';
import { cn } from '@/utils/cn';

const groupRowVariants = cva(
  'whitespace-nowrap w-full flex h-9 items-center py-2.5 pr-2 gap-1 border-b border-solid border-borderGray text-sm font-medium text-black',
  {
    variants: {
      state: {
        default: 'bg-white ',
        hover: 'bg-backgroundGray',
        hold: 'bg-[rgba(25,240,120,0.2)]',
        unselected: 'bg-backgroundUnselected',
        selected: 'text-backgroundGreen bg-backgroundSelected',
      },
      unclassified: {
        true: 'text-textGray2',
        false: '',
      },
    },

    defaultVariants: {
      state: 'default',
      unclassified: false,
    },
  }
);

interface GroupRowProps extends VariantProps<typeof groupRowVariants> {
  tId: number;
  level?: number;
  state?: 'default' | 'hover' | 'hold' | 'unselected' | 'selected';
  isEdit?: boolean;
  unclassified?: boolean;
  children?: GroupRowProps[];
}

const GroupRow = ({
  tId,
  level = 1,
  state = 'default',
  isEdit = false,
  unclassified = false,
}: GroupRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasUpperOrg = level > 1;
  const basePadding = 14;
  const paddingIncrement = 24;
  const { teamDetail, isLoading, isError, isSuccess } = useGetTeamDetail(tId);

  console.log('teamDetail', teamDetail);
  if (unclassified) {
    return (
      <div
        className={cn(
          groupRowVariants({
            state,
            unclassified: true,
          })
        )}
        style={{ paddingLeft: `${basePadding}px` }}
      >
        <span className="flex-1">미분류 그룹</span>
      </div>
    );
  }

  if (!isSuccess) {
    return null;
  }
  const hasChildren = teamDetail.sub_teams.length > 0;
  const paddingValue =
    !hasChildren && !hasUpperOrg ? basePadding : (level - 1) * paddingIncrement;

  return (
    <>
      <div
        className={cn(
          groupRowVariants({
            state,
            unclassified,
          })
        )}
        style={{ paddingLeft: `${paddingValue}px` }}
      >
        {hasUpperOrg && <div className="pr-1">{Icons.Line}</div>}

        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn('px-1 transition-transform', {
              'rotate-180': isExpanded,
            })}
          >
            {isExpanded ? Icons.TriangleButtonOpen : Icons.TriangleButtonClose}
          </button>
        )}
        <span className="flex-1">
          {unclassified ? '미분류 그룹' : teamDetail.name}
        </span>
        {isEdit && (
          <EditBtn
            onClick={() => {}}
            text="수정됨"
          />
        )}
      </div>
      {isExpanded &&
        teamDetail.sub_teams.map((sub_team) => (
          <GroupRow
            key={sub_team.t_id}
            tId={sub_team.t_id}
            level={level + 1}
            isEdit={isEdit}
          />
        ))}
    </>
  );
};

export default GroupRow;
