import GroupRow from './GroupRow';
import UnclassifiedGroupRow from './UnclassifiedGroupRow';

import { SubTeam } from '@/entities/organization';

type OrgListProps = {
  teamList: team[];
  selectedTId: number | null;
  setSelectedTId: (tId: number) => void;
};
type team = {
  tId: number;
  name: string;
  sub_teams: SubTeam[];
};
const OrgList = ({ teamList, selectedTId, setSelectedTId }: OrgListProps) => {
  const listBackShadow =
    'shadow-inner shadow-[0px_0px_5px_0px_rgba(0,0,0,0.05)]';

  return (
    <div className={`${listBackShadow} h-[763px] rounded-md bg-backgroundGray`}>
      <div className="m-[6px] flex h-[709px] max-h-[709px] flex-col overflow-x-auto rounded-sm border border-textGray1 bg-white">
        <div className="w-max min-w-full">
          {teamList.map((team) => (
            <GroupRow
              tId={team.tId}
              level={team.sub_teams.length > 0 ? 1 : 0}
              key={team.tId}
              selectedTId={selectedTId}
              setSelectedTId={setSelectedTId}
            />
          ))}
        </div>
      </div>
      <div className="m-[6px] flex h-9 rounded-sm border border-textGray1 bg-white">
        <UnclassifiedGroupRow
          selectedTId={selectedTId}
          setSelectedTId={setSelectedTId}
        />
      </div>
    </div>
  );
};

export default OrgList;
