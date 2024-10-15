import styles from './styles.module.css';
import { FC, FunctionComponent } from 'react';

type Info = {
	Icon: FunctionComponent;
	text: string;
};

type Props = {
	image: string;
	date: string;
	title: string;
	info: Array<Info>;
};

export const ProjectCard: FC<Props> = ({image, date, title, info}) => (
	<div className={styles.card}>
		<div className={styles.date}>
			{date}
		</div>
		<img className={styles.image} alt="project" src={image} />
		<div className={styles.container}>
			<h3 className={styles.title}>
				{title}
			</h3>
			<div className={styles.text}>
				Что мы сделали в этом проекте:
			</div>
			<div className={styles.info}>
				{
					info.map(({ text, Icon }) => {
						return <div key={text} className={styles.infoItem}>
							<Icon />
							<div>{text}</div>
						</div>;
					})
				}
			</div>
			<div className={styles.button}>
				Подробнее
			</div>
		</div>
	</div>
);
