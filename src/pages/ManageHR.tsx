import { HRTabs } from '@/components/HR/HRTabs';
import { Icons } from '@/constants/icons';

export const ManageHR = () => {
  return (
    <div className="flex flex-col gap-5 px-[54px] pt-[14px]">
      {Icons.HRTitle}
      <HRTabs />
    </div>
  );
};
