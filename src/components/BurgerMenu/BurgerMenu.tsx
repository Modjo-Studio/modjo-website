import { useState } from 'react';
import { links } from '../../utils/configs';
import scrollToBlock from '../../utils/scrollToBlock';
import styles from './BurgerMenu.module.css';
import { ReactComponent as Burger } from '@svg/burger.svg';
import { ReactComponent as Close } from '@svg/close.svg';
import classNames from 'classnames';
type Props = {};

const BurgerMenu = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<div className={styles.burger__menu}>
			<Burger onClick={() => setIsOpen(true)} />
			<div
				className={classNames({
					[styles.menu__opened]: isOpen,
					[styles.menu]: true,
				})}
			>
				<Close className={styles.close__btn} onClick={() => setIsOpen(false)} />
				{links.map((el, index) => {
					return (
						<button
							key={index}
							onClick={() => {
								scrollToBlock(el.blockId);
							}}
						>
							{el.title}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default BurgerMenu;
