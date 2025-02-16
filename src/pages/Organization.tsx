import SearchBar from '@/components/common/SearchBar';
import OrgList from '@/components/organization/OrgList';
import { Icons } from '@/constants/icons';

const Organization = () => {
  return (
    <div>
      <div>{Icons.OrgTitle}</div>
      <div className="flex w-[374px] flex-col gap-[14px]">
        <SearchBar
          placeholder="여기에서 부서명을 검색하세요."
          className="mt-4 text-[15px] font-medium"
        />
        <OrgList />
      </div>
    </div>
  );
};

export default Organization;
