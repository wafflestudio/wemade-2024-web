import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[560px] flex-col items-center overflow-hidden">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
