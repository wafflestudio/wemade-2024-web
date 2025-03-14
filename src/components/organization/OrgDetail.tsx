import ListHeader from './ListHeader';
import ListSpace from './LIstSpace';

type OrgDetailProps = {
  detail: Detail;
};
type Detail = {
  name: string;
  member_count: number;
  members: Member[];
  corporation: { name: string };
};
type Member = {
  p_id: number;
  name: string;
  roles: { role: string }[];
};
const OrgDetail = ({ detail }: OrgDetailProps) => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';
  return (
    <div
      className={`${listBackShadow} flex h-[763px] flex-col rounded-md bg-backgroundGray`}
    >
      <ListHeader
        title={detail.name}
        count={detail.member_count}
      />
      <div className="m-[6px] flex flex-1 flex-col gap-1.5 overflow-y-auto">
        {detail?.members.map((member) => (
          <ListSpace
            key={member.p_id}
            name={member.name}
            company={detail.corporation.name}
            department={detail.name}
            position={member.roles.map((item) => item.role).join(', ')}
          />
        ))}
      </div>
    </div>
  );
};

export default OrgDetail;
