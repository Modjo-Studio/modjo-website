import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

type Props = {};

const ErrorPage = (props: Props) => {
	return (
		<div className={styles.page}>
			<h1>404</h1>
			<p>
				Страница не найдена. <Link to='/'>вернуться на главную страницу</Link>
			</p>
		</div>
	);
};

export default ErrorPage;
