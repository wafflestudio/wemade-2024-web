import ListHeader from './ListHeader';
import ListSpace from './LIstSpace';

import mockListSpaceData from '@/mocks/mockListSpaceData';

const OrgDetail = () => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div
      className={`${listBackShadow} flex h-[763px] flex-col rounded-md bg-backgroundGray`}
    >
      <ListHeader
        title="위메이드"
        count={78}
      />
      <div className="m-[6px] flex flex-1 flex-col gap-1.5 overflow-y-auto">
        {mockListSpaceData.map((item) => (
          <ListSpace
            key={item.id}
            name={item.name}
            company={item.company}
            department={item.department}
            position={item.position}
            state={item.state as 'default' | 'select'}
            isHovered={item.isHovered}
          />
        ))}
      </div>
    </div>
  );
};

export default OrgDetail;
