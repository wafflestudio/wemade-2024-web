import { useState } from 'react';

import SearchBar from '@/components/common/SearchBar';
import OrgDetail from '@/components/organization/OrgDetail';
import OrgList from '@/components/organization/OrgList';
import SortOrder from '@/components/organization/SortOrder';
import { Icons } from '@/constants/icons';

const Organization = () => {
  const [selectedSort, setSelectedSort] = useState('가나다순');
  return (
    <div>
      <div>{Icons.OrgTitle}</div>
      <div className="flex gap-5">
        <div className="flex w-[445px] flex-col gap-[14px]">
          <SearchBar
            placeholder="여기에서 부서명을 검색하세요."
            className="mt-4 text-[15px] font-medium"
          />
          <OrgList />
        </div>
        <div className="RightSide mt-4 flex w-[445px] flex-col gap-[14px]">
          <div className="flex justify-end">
            <SortOrder
              selectedValue={selectedSort}
              onSelect={setSelectedSort}
              options={['가나다순', '직급순']}
            />
          </div>
          <OrgDetail />
        </div>
      </div>
    </div>
  );
};

export default Organization;
