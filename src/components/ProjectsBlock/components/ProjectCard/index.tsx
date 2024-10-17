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
	url: string;
};

export const ProjectCard: FC<Props> = ({ image, date, title, info, url }) => (
	<article className={styles.card}>
		<p className={styles.date}>{date}</p>
		<img className={styles.image} alt='project' src={image} />
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>Что мы сделали в этом проекте:</p>
			<div className={styles.info}>
				{info.map(({ text, Icon }) => {
					return (
						<div key={text} className={styles.infoItem}>
							<Icon />
							<div>{text}</div>
						</div>
					);
				})}
			</div>
			<a href={url} className={styles.button} target='_blank' rel='noreferrer'>
				Посмотреть проект
			</a>
		</div>
	</article>
);
