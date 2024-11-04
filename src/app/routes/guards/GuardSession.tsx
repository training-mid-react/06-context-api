import { useBoardGame } from '@core/hooks';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IGuardProps {
    children: ReactNode;
}
export const Guard = ({ children }: IGuardProps) => {
    const { players } = useBoardGame();
    const navigate = useNavigate();

    useEffect(() => {
        if (!players?.length) return navigate('/');
    }, [players]);

    return children;
};
