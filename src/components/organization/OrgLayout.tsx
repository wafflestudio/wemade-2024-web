import { Outlet } from 'react-router-dom';

import SideBar from '@/Layout/SideBar.tsx';

const OrgLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="pb-[43px] pl-[275px] pr-[205px] pt-[58px]">
        <Outlet />
      </div>
    </div>
  );
};

export default OrgLayout;
