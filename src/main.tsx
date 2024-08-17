import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const browserRouter = createBrowserRouter(routes,
  {
    basename: '/',
    future:{
      v7_normalizeFormMethod: true,
    }
  }
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
};

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={browserRouter}/>
  </StrictMode>,
)
