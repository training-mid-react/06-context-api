import { AppContext } from '@core/state/AppContext';
import { resetState } from '@core/state/board-game/actions';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResetButton = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    return (
        <button
            onClick={() => {
                dispatch(resetState());
                navigate('/');
            }}
        >
            Reiniciar juego
        </button>
    );
};
