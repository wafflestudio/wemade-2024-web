import { Outlet } from 'react-router-dom';

import SideBar from '@/Layout/SideBar.tsx';

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-[70px] flex w-full justify-center px-[56px] py-[48px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
