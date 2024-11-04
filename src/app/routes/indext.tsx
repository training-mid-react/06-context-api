import { createHashRouter } from 'react-router-dom';
import { HomeContainer } from '../containers/HomeContainer';
import { AppProvider } from '@core/state/AppContext';
import { BoardContainer } from '../containers/BoardContainer';
import { Guard } from './guards/GuardSession';

export const router = createHashRouter([
    {
        path: '/',
        element: (
            <AppProvider>
                <Guard>
                    <HomeContainer />
                </Guard>
            </AppProvider>
        ),
    },
    {
        path: '/board-game',
        element: (
            <AppProvider>
                <Guard>
                    <BoardContainer />
                </Guard>
            </AppProvider>
        ),
    },
]);
