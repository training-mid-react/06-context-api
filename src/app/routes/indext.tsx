import { createHashRouter } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import { AppProvider } from '../core/state/AppContext';

export const router = createHashRouter([
  {
    path: '',
    element: <AppProvider><HomeContainer /></AppProvider>
  }
]);