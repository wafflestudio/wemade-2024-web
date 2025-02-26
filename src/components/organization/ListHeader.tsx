import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const listHeaderVariants = cva(
  'w-full  flex items-center bg-backgroundGray text-titleBlack font-bold text-lg p-4',
  {
    variants: {
      type: {
        default: 'h-[53px]',
        unclassified: 'h-[79px]',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  }
);

interface ListHeaderProps extends VariantProps<typeof listHeaderVariants> {
  title: string;
  count: number;
  description?: string;
}
const ListHeader = ({
  title,
  count,
  type = 'default',
  description,
}: ListHeaderProps) => {
  return (
    <div className={cn(listHeaderVariants({ type }))}>
      <div className="flex items-baseline gap-2">
        <span>{title}</span>
        <span className="text-sm font-semibold text-textGray2">{count}명</span>
      </div>
      {type === 'unclassified' && description && (
        <p className="mt-2.5 text-[13px] text-textGray1">{description}</p>
      )}
    </div>
  );
};

export default ListHeader;
