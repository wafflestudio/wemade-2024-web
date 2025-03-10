import ListHeader from './ListHeader';
import ListSpace from './LIstSpace';

import { TeamDetail } from '@/entities/organization';

type OrgDetailProps = {
  teamDetail: TeamDetail;
};

const OrgDetail = ({ teamDetail }: OrgDetailProps) => {
  console.log(teamDetail);
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div
      className={`${listBackShadow} flex h-[763px] flex-col rounded-md bg-backgroundGray`}
    >
      <ListHeader
        title={teamDetail.name}
        count={teamDetail.member_count}
      />
      <div className="m-[6px] flex flex-1 flex-col gap-1.5 overflow-y-auto">
        {teamDetail?.members.map((member) => (
          <ListSpace
            key={member.p_id}
            name={member.name}
            company={teamDetail.corporation.name}
            department={teamDetail.name}
            position={member.roles.map((item) => item.role).join(', ')}
          />
        ))}
      </div>
    </div>
  );
};

export default OrgDetail;
