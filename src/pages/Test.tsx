import { useState } from 'react';

import Input from '@/components/common/Input.tsx';
import Textarea from '@/components/common/Textarea.tsx';
import GroupTransferInfo from '@/components/InfoCard/GroupTransferInfo.tsx';
import InfoCardModal from '@/components/InfoCard/InfoCardModal.tsx';
import useModalState from '@/hooks/useModal.ts';

const Test = () => {
  const [infoCardModalState, openInfoCardModal, closeInfoCardModal] =
    useModalState();

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <button onClick={openInfoCardModal}>모달 열기</button>
      {infoCardModalState !== 'closed' && (
        <InfoCardModal
          state={infoCardModalState}
          onClose={closeInfoCardModal}
        />
      )}
      <button onClick={() => setIsEditing((prev) => !prev)}>edit</button>
      <Textarea isEditing={isEditing} />
      <Input />

      <GroupTransferInfo
        teamName="AI기술팀"
        startDate="2024.07.02"
        endDate="2024.12.23"
        leaderName="김철수"
        responsibilities="밥먹기"
      />
    </div>
  );
};

export default Test;
