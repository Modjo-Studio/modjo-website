import classNames from 'classnames';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '@svg/logo.svg';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={classNames('container', styles.header)}>
			<Logo />
		</header>
	);
};

export default Header;
