import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useToken } from '@/utils/api';

export const ProtectedRoute: React.FC<{ redirectTo: string }> = ({
  redirectTo,
}) => {
  const { accessToken } = useToken();
  if (!accessToken) {
    console.log('redirecting to', redirectTo);
    return (
      <Navigate
        to={redirectTo}
        replace
      />
    );
  }

  return <Outlet />;
};
