import './styles.scss';
import { useHome } from '@core/hooks';

export const Home = () => {
    const { selectOptions, register, handleSubmit, errors, onSubmit } =
        useHome();

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Configuración de Jugadores</h2>

            <h3>Jugador 1</h3>
            <label>
                Nombre:
                <input
                    type="text"
                    {...register('player1.name', {
                        required: 'Nombre es requerido',
                    })}
                    placeholder="Ingresa un nombre"
                />
                {errors.player1?.name && (
                    <span style={{ color: 'red' }}>
                        {errors.player1.name.message}
                    </span>
                )}
            </label>
            <label>
                Color:
                <select
                    {...register('player1.color', {
                        required: 'Selecciona un color',
                    })}
                >
                    {selectOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {errors.player1?.color && (
                    <span style={{ color: 'red' }}>
                        {errors.player1.color.message}
                    </span>
                )}
            </label>

            <h3>Jugador 2</h3>
            <label>
                Nombre:
                <input
                    type="text"
                    {...register('player2.name', {
                        required: 'Nombre es requerido',
                    })}
                    placeholder="Ingresa un nombre"
                />
                {errors.player2?.name && (
                    <span style={{ color: 'red' }}>
                        {errors.player2.name.message}
                    </span>
                )}
            </label>
            <label>
                Color:
                <select
                    {...register('player2.color', {
                        required: 'Selecciona un color',
                    })}
                >
                    {selectOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {errors.player2?.color && (
                    <span style={{ color: 'red' }}>
                        {errors.player2.color.message}
                    </span>
                )}
            </label>

            <button>Iniciar Juego</button>
        </form>
    );
};
