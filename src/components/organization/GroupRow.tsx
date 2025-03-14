import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

import EditBtn from './EditBtn';

import { Icons } from '@/constants/icons';
import { useGetTeamDetail } from '@/usecases/organization';
import { cn } from '@/utils/cn';

const groupRowVariants = cva(
  'whitespace-nowrap w-full flex h-9 items-center py-2.5 pr-2 gap-1 border-b border-solid border-borderGray text-sm font-medium text-black hover:bg-backgroundGray transition-all',
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

interface GroupRowProps extends VariantProps<typeof groupRowVariants> {
  tId: number;
  level?: number;
  isEdit?: boolean;
  children?: GroupRowProps[];
  selectedTId: number | null;
  setSelectedTId: (tId: number) => void;
}
const GroupRow = ({
  tId,
  level = 1,
  isEdit = false,
  selectedTId,
  setSelectedTId,
}: GroupRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasUpperOrg = level > 1;
  const basePadding = 14;
  const paddingIncrement = 24;
  const { teamDetail, isTeamLoading, isError, isSuccess } =
    useGetTeamDetail(tId);
  const isSelected = selectedTId === tId;
  const state = isSelected ? 'selected' : 'default';
  const handleClick = () => {
    setSelectedTId(tId);
  };

  if (!isSuccess || isError || teamDetail === null) {
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
          })
        )}
        style={{ paddingLeft: `${paddingValue}px` }}
        onClick={handleClick}
      >
        {hasUpperOrg && <div className="pr-1">{Icons.Line}</div>}

        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn('px-1 transition-transform')}
          >
            {isExpanded ? Icons.TriangleButtonOpen : Icons.TriangleButtonClose}
          </button>
        )}
        <span className="flex-1">{teamDetail.name}</span>
        {isEdit && (
          <EditBtn
            onClick={() => {}}
            text="수정됨"
          />
        )}
      </div>
      {isExpanded &&
        hasChildren &&
        teamDetail.sub_teams.map((sub_team) => (
          <GroupRow
            key={sub_team.t_id}
            tId={sub_team.t_id}
            level={level + 1}
            isEdit={isEdit}
            selectedTId={selectedTId}
            setSelectedTId={setSelectedTId}
          />
        ))}
    </>
  );
};

export default GroupRow;
