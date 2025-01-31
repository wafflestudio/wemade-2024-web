import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from '@/components/Auth';
import { Home } from '@/pages/home';
import { Landing } from '@/pages/landing';
import { Signup } from '@/pages/signup';

import '@/styles/styles.css';
const routes = [
  {
    path: '/',
    element: <ProtectedRoute redirectTo="/auth/login" />,
    children: [{ path: '', element: <Signup /> }],
  },
  { path: '/auth/login', element: <Landing /> },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <ProtectedRoute redirectTo="/auth/login" />,
    children: [{ path: '', element: <Signup /> }],
  },
];

const router = createBrowserRouter(routes);
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
