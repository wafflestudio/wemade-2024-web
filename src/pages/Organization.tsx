import { useState } from 'react';

import { Loading } from '@/components/common/Loading';
import SearchBar from '@/components/common/SearchBar';
import CorporationSelect from '@/components/organization/CorporationSelect';
import GroupMenu from '@/components/organization/GroupMenu';
import OrgDetail from '@/components/organization/OrgDetail';
import OrgList from '@/components/organization/OrgList';
import SortOrder from '@/components/organization/SortOrder';
import { Icons } from '@/constants/icons';
import {
  useGetCorporateOptions,
  useGetTeamDetail,
  useGetTeamListInCorp,
} from '@/usecases/organization';

const Organization = () => {
  const [selectedSort, setSelectedSort] = useState('가나다순');

  const { corpOptions, isLoading: isLoadingOptions } = useGetCorporateOptions();
  const [selectedCorp, setSelectedCorp] = useState<number>(1);
  const { teamList, isLoading } = useGetTeamListInCorp(selectedCorp);
  const [selectedTId, setSelectedTId] = useState<number | null>(null);

  const { teamDetail, isTeamLoading } = useGetTeamDetail(selectedTId ?? 1);
  if (isLoadingOptions || isLoading || isTeamLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>{Icons.OrgTitle}</div>
        <CorporationSelect
          corpOptions={corpOptions}
          selectedCorp={selectedCorp}
          setSelectedCorp={setSelectedCorp}
        />
      </div>
      <div className="flex gap-5">
        <div className="flex w-[445px] flex-col gap-[14px]">
          <SearchBar
            placeholder="여기에서 부서명을 검색하세요."
            className="mt-4 text-[15px] font-medium"
          />
          <OrgList
            teamList={teamList}
            selectedTId={selectedTId}
            setSelectedTId={setSelectedTId}
          />
        </div>
        <div className="RightSide mt-4 flex w-[445px] flex-col gap-[14px]">
          <div className="flex justify-end">
            <SortOrder
              selectedValue={selectedSort}
              onSelect={setSelectedSort}
              options={['가나다순', '직급순']}
            />
          </div>
          {teamDetail && <OrgDetail teamDetail={teamDetail} />}
        </div>
      </div>
      <GroupMenu />
    </div>
  );
};

export default Organization;
