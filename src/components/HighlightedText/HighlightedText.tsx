import React from 'react';
import styles from './HighlightedText.module.css';

type Props = {
	children: React.ReactNode;
	fontStyle?: 'italic' | 'normal' | 'oblique';
};

const HighlightedText = (props: Props) => {
	return (
		<span
			className={styles.text}
			style={{ fontStyle: props.fontStyle || 'normal' }}
		>
			{props.children}
		</span>
	);
};

export default HighlightedText;
