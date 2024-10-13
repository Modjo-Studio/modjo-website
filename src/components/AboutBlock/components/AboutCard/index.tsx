import styles from './styles.module.css'
import { FC } from 'react';

type Props = {
	title: string;
	texts: string[];
};

export const AboutCard: FC<Partial<Props>> = ({ title, texts }) => (
	<div className={styles.card}>
		<h4 className={styles.title}>{title}</h4>
		<div className={styles.texts}>
			{texts?.map(text => <p>{text}</p>)}
		</div>
	</div>
)
