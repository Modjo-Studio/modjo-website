import styles from './styles.module.css';
import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const BoldText: FC<Props> = ({children}) => (
	<span className={styles.text}>{children}</span>
);
