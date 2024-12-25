import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@svg/logo.svg';
import { FC } from 'react';
import { links } from '../../../../utils/configs';
import scrollToBlock from '../../../../utils/scrollToBlock';

type Props = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const FooterDesktop: FC<Props> = ({isOpen, setIsOpen}) => (
	<footer className={styles.footer}>
		<Link to='/'>
			<Logo />
		</Link>
		<div className={styles.list}>
			{links.map(({ title, blockId }, index) => (
				<button
					onClick={() => scrollToBlock(blockId)}
					className={styles.item}
					key={index}
				>
					{title}
				</button>
			))}
		</div>
		<div className={styles.rights}>
			{/*<button onClick={() => setIsOpen(true)} className={styles.policy}>*/}
			{/*	политика конфиденциальности*/}
			{/*</button>*/}
			<div>
				© 2024 все права защищены
			</div>
		</div>
	</footer>
);
