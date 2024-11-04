import { AppContext } from '@core/state/AppContext';
import { ReactNode, useContext } from 'react';
import './styles.scss';
import { ResetButton } from '@ui/components/Board/ResetButton';

interface Props {
    children: ReactNode | ReactNode[];
}
const LayoutBoard = ({ children }: Props) => {
    const { state } = useContext(AppContext);

    return (
        <div className="board-layout">
            <div className="board-layout__header">
                <section>
                    <h3>Jugadores:</h3>
                    <ul>
                        {state?.players?.map((p) => (
                            <li
                                className={
                                    p.isCurrentPlayer
                                        ? 'board-layout__player--active'
                                        : ''
                                }
                                key={p.name}
                                style={{ borderColor: p.color ?? 'black' }}
                            >
                                {p.name}
                            </li>
                        ))}
                    </ul>
                    <h1>
                        {state.winner
                            ? `Ganador: ${state.winner}`
                            : `Es el turno de ${
                                  state?.players?.find((p) => p.isCurrentPlayer)
                                      ?.name
                              }`}
                    </h1>
                </section>
                <ResetButton />
            </div>
            <div className="board-layout__body">{children}</div>
        </div>
    );
};

export default LayoutBoard;
