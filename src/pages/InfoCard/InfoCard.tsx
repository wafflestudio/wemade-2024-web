import BackButton from '@/components/common/BackButton.tsx';
import Divider from '@/components/common/Divider.tsx';
import GroupTransferInfo from '@/components/InfoCard/GroupTransferInfo.tsx';
import InfoDetail from '@/components/InfoCard/InfoDetail.tsx';
import Tag from '@/components/InfoCard/Tag.tsx';

const InfoCard = () => {
  return (
    <>
      <div className="fixed left-[70px] top-0 h-full w-[200px] bg-backgroundGray">
        <BackButton className="absolute right-8 top-8" />
      </div>

      <div className="w-full pl-[200px]">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[22px] font-semibold">홍길동</p>
            {/*  나 */}
          </div>
          <div className="flex gap-1.5">
            <Tag label="위메이드" />
            <Tag label="인프라보안팀" />
            <Tag
              label="대리"
              isPosition
            />
          </div>
        </div>
        <Divider className="my-8" />

        <div className="flex flex-col gap-7">
          <InfoDetail
            title="이메일"
            content="abcde@gmail.com"
          />
          <InfoDetail
            title="전화번호"
            content="010 1234 5678"
          />
        </div>
        <Divider className="my-8" />

        <div className="flex max-w-[calc(100vw-382px)] flex-col gap-3">
          <h2 className="text-[15px] font-semibold">부서 이동</h2>
          <div className="overflow-x-auto">
            <div className="h-[354px] w-fit min-w-[144px] rounded-md bg-backgroundGray p-1.5">
              <div className="inline-flex flex-nowrap gap-1.5">
                <GroupTransferInfo
                  teamName="부서 이동"
                  startDate="2024.07.02"
                  endDate="2024.12.23"
                  leaderName="김철수"
                  responsibilities="밥 먹기"
                />
                <GroupTransferInfo
                  teamName="부서 이동"
                  startDate="2024.07.02"
                  endDate="2024.12.23"
                  leaderName="김철수"
                  responsibilities="밥 먹기"
                />
                <GroupTransferInfo
                  teamName="부서 이동"
                  startDate="2024.07.02"
                  endDate="2024.12.23"
                  leaderName="김철수"
                  responsibilities="밥 먹기"
                />
                <GroupTransferInfo
                  teamName="부서 이동"
                  startDate="2024.07.02"
                  endDate="2024.12.23"
                  leaderName="김철수"
                  responsibilities="밥 먹기"
                />
                <GroupTransferInfo
                  teamName="부서 이동"
                  startDate="2024.07.02"
                  endDate="2024.12.23"
                  leaderName="김철수"
                  responsibilities="밥 먹기"
                />
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-8" />

        <div className="flex flex-col gap-7">
          <InfoDetail
            title="학력"
            content={[
              '서울대학교 컴퓨터공학과 학사 졸',
              '서울대학교 컴퓨터공학과 석사 졸',
              'KAIST 전산학과 박사 졸',
            ]}
          />
          <InfoDetail
            title="과거 이력"
            content="위메이드 개발팀 근무"
          />
        </div>
      </div>
    </>
  );
};

export default InfoCard;
