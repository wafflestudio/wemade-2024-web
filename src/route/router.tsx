import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/Layout/Layout.tsx';
import InfoCard from '@/pages/InfoCard/InfoCard.tsx';
import Landing from '@/pages/Landing.tsx';
import OAuthCallback from '@/pages/OAuthCallback.tsx';
import SignUp from '@/pages/SignUp.tsx';
import ProtectedRoute from '@/route/ProtectedRoute.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'auth/login', element: <Landing /> },
      { path: 'home', element: <OAuthCallback /> },
      {
        element: <ProtectedRoute redirectTo="/auth/login" />,
        children: [
          { path: 'signup', element: <SignUp /> },
          { path: 'infocard', element: <InfoCard /> },
        ],
      },
      { path: '*', element: <Landing /> },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute redirectTo="/auth/login" />,
    children: [{ index: true, element: <Landing /> }],
  },
]);

// 로그인 없이 UI 테스트용 라우터
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: 'auth/login', element: <Landing /> },
//       { path: 'signup', element: <SignUp /> },
//       { path: 'infocard', element: <InfoCard /> },
//     ],
//   },
// ]);
