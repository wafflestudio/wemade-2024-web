import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const menuButtonVariants = cva(
  'flex items-center gap-2 p-2 rounded- text-sm font-medium transition-all',
  {
    variants: {
      type: {
        default: 'bg-white hover:bg-hoverGray',
        edit: 'bg-pointColor hover:bg-backgroundGreen',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  }
);

interface MenuButtonProps extends VariantProps<typeof menuButtonVariants> {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MenuButton = ({
  icon,
  label,
  type = 'default',
  onClick,
}: MenuButtonProps) => {
  return (
    <button
      className={cn(menuButtonVariants({ type }))}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default MenuButton;
