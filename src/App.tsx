import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '@/pages/home';
import { Landing } from '@/pages/landing';
import { Signup } from '@/pages/signup';

import '@/styles/styles.css';
const routes = [
  { path: '/', element: <Landing /> },
  { path: '/signup', element: <Signup /> },
  { path: '/home', element: <Home /> },
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
