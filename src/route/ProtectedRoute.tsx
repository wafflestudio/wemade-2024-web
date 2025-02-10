import { Navigate, Outlet } from 'react-router-dom';

import { useToken } from '@/hooks/useToken';

const ProtectedRoute = ({ redirectTo }: { redirectTo: string }) => {
  const { accessToken } = useToken();

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate
      to={redirectTo}
      replace
    />
  );
};

export default ProtectedRoute;
