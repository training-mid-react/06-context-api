import { createHashRouter } from 'react-router-dom';
import { GameProvider } from '../app/state/GameContext';
import { PrincipalContainer } from '../app/containers/PrincipalContainer';

export const router = createHashRouter([
  {
    path: '',
    element: <GameProvider><PrincipalContainer /></GameProvider>
  }
]);