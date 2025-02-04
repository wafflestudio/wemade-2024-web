import React, { useState } from 'react';

import Button from '@/components/common/Button.tsx';
import Textarea from '@/components/common/Textarea.tsx';

interface GroupTransferInfoProps {
  teamName: string;
  startDate: string;
  endDate: string;
  leaderName: string;
  responsibilities: string;
}

const GroupTransferInfo = ({
  teamName,
  startDate,
  endDate,
  leaderName,
  responsibilities,
}: GroupTransferInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [responsibility, setResponsibility] = useState(responsibilities);

  return (
    <div className="flex h-[342px] w-[368px] flex-col gap-4 rounded-b border border-borderGray bg-white px-6 py-5">
      <h2 className="text-sm font-medium text-black">{teamName}</h2>

      <p className="text-sm font-medium text-textGray2">
        {startDate} ~ {endDate}
      </p>

      <div className="flex w-[152px] justify-between text-sm font-medium text-textGray2">
        <span>부서장</span>
        <span>{leaderName}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm font-medium text-textGray2">업무</span>
        {isEditing ? (
          <div className="flex flex-col items-start gap-2">
            <Button
              label="수정 취소"
              theme="gray"
              size="small"
              onClick={() => setIsEditing(false)}
            />
            <Button
              label="저장"
              theme="green"
              size="small"
              className="w-auto"
              onClick={() => setIsEditing(false)}
            />
          </div>
        ) : (
          <Button
            label="수정"
            theme="gray"
            size="small"
            onClick={() => setIsEditing(true)}
          />
        )}
        <Textarea
          isEditing={isEditing}
          value={responsibility}
          className="h-[196px] w-[210px]"
          onChange={(e) => setResponsibility(e.target.value)}
        />
      </div>
    </div>
  );
};

export default GroupTransferInfo;
