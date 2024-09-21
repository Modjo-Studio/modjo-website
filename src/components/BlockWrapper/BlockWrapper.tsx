import classNames from 'classnames';
import styles from './BlockWrapper.module.css';

type Props = {
	blockId?: string;
	children: React.ReactNode;
	minHeight?: string;
};

const BlockWrapper = ({ blockId, children, minHeight }: Props) => {
	return (
		<section
			id={blockId}
			className={classNames('container', styles.block)}
			style={{ minHeight: minHeight || '100dvh' }}
		>
			{children}
		</section>
	);
};

export default BlockWrapper;
