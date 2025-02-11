import { createBrowserRouter } from 'react-router-dom';

import OrgLayout from '@/components/organization/OrgLayout';
import AuthLayout from '@/Layout/AuthLayout.tsx';
import Layout from '@/Layout/Layout.tsx';
import Home from '@/pages/Home.tsx';
import Landing from '@/pages/Landing.tsx';
import OAuthCallback from '@/pages/OAuthCallback.tsx';
import Organization from '@/pages/Organization';
import SignUp from '@/pages/SignUp.tsx';
import ProtectedRoute from '@/route/ProtectedRoute.tsx';

export const router = createBrowserRouter([
  // Layout을 사용하는 기본 구조
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute redirectTo="/auth/login" />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },

  // AuthLayout을 사용하는 인증 관련 경로
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Landing /> },
      { path: 'callback', element: <OAuthCallback /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  {
    path: '/organization',
    element: <OrgLayout />,
    children: [{ index: true, element: <Organization /> }],
  },

  // 404 페이지 처리 (잘못된 경로 접근 시 `Landing`으로 이동)
  {
    path: '*',
    element: <AuthLayout />,
    children: [{ path: '*', element: <Landing /> }],
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
//       { path: 'test', element: <Test /> },
//     ],
//   },
// ]);
