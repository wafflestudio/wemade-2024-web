import GroupRow from './GroupRow';

import mockGroupRows from '@/mocks/mockGroupRows';

const OrgList = () => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div className={`${listBackShadow} h-[763px] rounded-md bg-backgroundGray`}>
      <div className="m-[6px] flex h-[709px] max-h-[709px] flex-col overflow-x-auto rounded-sm border border-textGray1 bg-white">
        <div className="w-max min-w-full">
          {mockGroupRows.map((group, index) => (
            <GroupRow
              key={index}
              {...group}
            />
          ))}
        </div>
      </div>
      <div className="m-[6px] flex h-9 rounded-sm border border-textGray1 bg-white">
        <GroupRow
          name="미분류 그룹"
          unclassified={true}
        />
      </div>
    </div>
  );
};

export default OrgList;
