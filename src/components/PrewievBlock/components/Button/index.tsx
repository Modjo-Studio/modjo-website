import styles from './styles.module.css';
import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

type Props = {
		text: string;
		onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button:FC<Props> = ({text, onClick}) => (
	<button onClick={onClick} className={classNames(styles.button)}>
		{text}
	</button>
)
