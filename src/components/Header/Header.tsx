import classNames from 'classnames';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '@svg/logo.svg';
import { Link } from 'react-router-dom';
import { links } from '../../utils/configs';
import scrollToBlock from '../../utils/scrollToBlock';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={classNames('container', styles.header)}>
			<Link to='/'>
				<Logo />
			</Link>
			<nav className={styles.header__nav_links}>
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
			</nav>
		</header>
	);
};

export default Header;
