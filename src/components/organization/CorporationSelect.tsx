import Dropdown, { DropdownOption } from '../common/DropDown';

type CorporationSelectProps = {
  corpOptions: DropdownOption<number>[];
  selectedCorp: number;
  setSelectedCorp: (value: number) => void;
};
const CorporationSelect = ({
  corpOptions,
  selectedCorp,
  setSelectedCorp,
}: CorporationSelectProps) => {
  return (
    <div className="flex items-center gap-2.5 text-sm font-medium">
      <div>법인선택</div>
      <Dropdown
        options={corpOptions}
        value={selectedCorp}
        onChange={setSelectedCorp}
        placeholder=""
      />
    </div>
  );
};

export default CorporationSelect;
