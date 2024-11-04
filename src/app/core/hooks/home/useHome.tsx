import { IPlayerForm } from '@core/interfaces/home/playerform.interface';
import { AppContext } from '@core/state/AppContext';
import { setPlayeres } from '@core/state/board-game/actions';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useHome = () => {
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const {
        register,
        setError,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<IPlayerForm>();

    const player1Color = watch('player1.color');
    const player2Color = watch('player2.color');

    const selectOptions = [
        { value: '', label: 'Selecciona un color' },
        { value: 'red', label: 'Rojo' },
        { value: 'blue', label: 'Azul' },
    ];

    const onSubmit = (data: IPlayerForm) => {
        dispatch(
            setPlayeres([
                { ...data.player1, id: 1, isCurrentPlayer: true },
                { ...data.player2, id: 2 },
            ])
        );
        navigate('/board-game');
    };

    useEffect(() => {
        if (player1Color && player2Color && player1Color === player2Color) {
            setError('player1.color', {
                type: 'custom',
                message: 'Los jugadores no pueden compartir el mismo color',
            });
        }
    }, [player1Color, player2Color]);

    return { selectOptions, errors, register, handleSubmit, onSubmit };
};
