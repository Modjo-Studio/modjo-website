import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@svg/logo.svg';
import React, { FC } from 'react';

export const FooterMobile: FC = () => (
	<footer className={styles.footer}>
		<Link to='/'>
			<Logo />
		</Link>
		<div className={styles.rights}>
			© 2024 все права защищены
		</div>
	</footer>
);
