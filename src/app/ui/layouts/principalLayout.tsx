import { FC, ReactNode } from 'react';
import './../../ui/styles/index.scss';

interface Props {
  children: ReactNode | ReactNode[]
}

export const PrincipalLayout: FC<Props> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
};
