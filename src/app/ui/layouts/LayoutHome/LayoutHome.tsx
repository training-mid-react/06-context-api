import { ReactNode } from 'react';

interface Props {
    children: ReactNode | ReactNode[];
}
const LayoutHome = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default LayoutHome;
