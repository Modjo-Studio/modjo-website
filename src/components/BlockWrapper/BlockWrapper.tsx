import classNames from 'classnames';
import styles from './BlockWrapper.module.css';

type Props = {
	blockId?: string;
	children: React.ReactNode;
};

const BlockWrapper = ({ blockId, children }: Props) => {
	return (
		<section id={blockId} className={classNames('container', styles.block)}>
			{children}
		</section>
	);
};

export default BlockWrapper;
