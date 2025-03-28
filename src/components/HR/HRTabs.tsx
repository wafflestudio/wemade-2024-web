import * as TabsPrimitive from '@radix-ui/react-tabs';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { cn } from '@/utils/cn';

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => {
  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={ref}
      className={cn(
        'items-center justify-center rounded-t-md border-l border-r border-t border-borderGray bg-backgroundGray px-[13px] py-2.5 text-16 font-semibold text-textGray1 data-[state=active]:bg-pointColor data-[state=active]:text-black',
        props.className
      )}
    />
  );
});

export const HRTabs = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'MOVE_DEPT';
  return (
    <TabsPrimitive.Root defaultValue={tab}>
      <TabsPrimitive.List className="flex w-full items-start">
        <TabsTrigger value="MOVE_DEPT">인사 이동</TabsTrigger>
        <TabsTrigger value="CHANGE_POSITION">직급 변경</TabsTrigger>
        <TabsTrigger value="CHANGE_INFO">정보변경신청</TabsTrigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content value="MOVE_DEPT">인사 이동</TabsPrimitive.Content>
      <TabsPrimitive.Content value="CHANGE_POSITION">
        직급 변경
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="CHANGE_INFO">
        정보변경신청
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
};
