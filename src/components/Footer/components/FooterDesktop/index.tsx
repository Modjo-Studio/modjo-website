import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@svg/logo.svg';
import React, { FC } from 'react';
import { links } from '../../../../utils/configs';
import scrollToBlock from '../../../../utils/scrollToBlock';

export const FooterDesktop: FC = () => (
	<footer className={styles.footer}>
		<Link to='/'>
			<Logo />
		</Link>
		<div className={styles.list}>
			{links.map(({ title, blockId }, index) =>
				<button onClick={() => scrollToBlock(blockId)} className={styles.item} key={index}>{title}</button>)}
		</div>
		<div className={styles.rights}>
			© 2024 все права защищены
		</div>
	</footer>
);
