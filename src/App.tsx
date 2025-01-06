import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from '@/pages/landing';
import Signup from '@/pages/signup';
import '@/styles/styles.css';

const routes = [
  { path: '/', element: <Landing /> },
  { path: '/signup', element: <Signup /> },
];

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
