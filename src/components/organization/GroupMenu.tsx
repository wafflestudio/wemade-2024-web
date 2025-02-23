import MenuButton from '@/components/organization/MenuBtn';
import { Icons } from '@/constants/icons';

const GroupMenu = () => {
  return (
    <div className="flex items-center justify-between rounded-md bg-backgroundGray p-1.5 pl-4">
      <p className="text-sm text-textGray1">
        조직을 구성하고 조직도를 내보낼 수 있습니다.
      </p>

      <div className="flex gap-2">
        <MenuButton
          icon={Icons.MenuHistory}
          label="히스토리"
        />
        <MenuButton
          icon={Icons.MenuFileExport}
          label="내보내기"
        />
        <MenuButton
          icon={Icons.MenuCardTravel}
          label="조직도 편집"
          type="edit"
        />
      </div>
    </div>
  );
};

export default GroupMenu;
