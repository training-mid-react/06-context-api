import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/ui/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
