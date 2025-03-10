import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  useGetUnclassifiedGroup,
} from '@/usecases/organization';

const Organization = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get('sort') ?? '가나다순';

  const { corpOptions, isLoading: isLoadingOptions } = useGetCorporateOptions();
  const [selectedCorp, setSelectedCorp] = useState<number>(1);
  const { teamList, isLoading } = useGetTeamListInCorp(selectedCorp);
  const [selectedTId, setSelectedTId] = useState<number | null>(null);

  const { teamDetail, isTeamLoading } = useGetTeamDetail(
    selectedTId === null || selectedTId === -1 ? 1 : selectedTId
  );
  const { unclassifiedGroup, isUnclassifiedLoading } =
    useGetUnclassifiedGroup();
  if (isLoadingOptions || isLoading || isTeamLoading || isUnclassifiedLoading) {
    return <Loading />;
  }

  const handleSelectedSort = (newSort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', newSort);
    setSearchParams(params, { replace: true });
  };
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
              onSelect={handleSelectedSort}
              options={['가나다순', '직급순']}
            />
          </div>
          {(selectedTId ?? -1) !== -1 && teamDetail && (
            <OrgDetail detail={teamDetail} />
          )}
          {selectedTId === -1 && unclassifiedGroup && (
            <OrgDetail
              detail={{
                name: '미분류그룹',
                member_count: unclassifiedGroup.length,
                members: unclassifiedGroup,
                corporation: {
                  name:
                    corpOptions.find((corp) => corp.value === selectedCorp)
                      ?.label ?? '',
                },
              }}
            />
          )}
        </div>
      </div>
      <GroupMenu />
    </div>
  );
};

export default Organization;
