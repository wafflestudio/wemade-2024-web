import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from '@/components/Auth';
import { Home } from '@/pages/Home';
import { Landing } from '@/pages/Landing';
import { SignUp } from '@/pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute redirectTo="/auth/login" />,
    children: [{ path: '', element: <SignUp /> }],
  },
  { path: '/auth/login', element: <Landing /> },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <ProtectedRoute redirectTo="/auth/login" />,
    children: [{ path: '', element: <SignUp /> }],
  },
]);
