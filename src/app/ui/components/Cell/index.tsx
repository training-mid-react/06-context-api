import { FC } from 'react';
import { PLAYER } from '../../../../core/interfaces';
import './style.scss';

interface CellProps {
  value: PLAYER | null;
}

export const Cell: FC<CellProps> = ({ value }) => {

  return (
    <>
    <div className={`cell cell__${value}`} role="cell"/>
    <div className='cell__frame'></div>
    </>
  );
};
