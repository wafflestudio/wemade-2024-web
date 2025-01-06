import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from '@/pages/landing';
import '@/styles/styles.css';

const routes = [{ path: '/', element: <Landing /> }];

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
