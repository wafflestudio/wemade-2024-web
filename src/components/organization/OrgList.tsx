import GroupRow from './GroupRow';

import mockGroupRows from '@/mocks/mockGroupRows';

const OrgList = () => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div className={`${listBackShadow} h-[763px] rounded-md bg-backgroundGray`}>
      <div className="m-[6px] flex h-[709px] max-h-[709px] flex-col overflow-x-auto rounded-sm border border-textGray1 bg-white">
        {mockGroupRows.map((row) => (
          <GroupRow
            key={row.id}
            name={row.name}
            hasChildren={row.hasChildren}
            hasUpperOrg={row.hasUpperOrg}
            level={row.level as 1 | 2 | 3 | 4 | 5 | null | undefined}
          />
        ))}
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
