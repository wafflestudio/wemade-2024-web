import GroupSelectBtn from './GroupSelectBtn';

const CorporationSelect = () => {
  return (
    <div className="flex items-center gap-2.5 text-sm font-medium">
      <div>법인선택</div>
      <GroupSelectBtn team="인프라보안팀" />
    </div>
  );
};

export default CorporationSelect;
