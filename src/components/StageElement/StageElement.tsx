import HighlightedText from '../HighlightedText/HighlightedText';
import styles from './StageElement.module.css';

type Props = {
	id: number;
	title: string;
	subtitle: string;
};

const StageElement = ({ id, title, subtitle }: Props) => {
	return (
		<article className={styles.element}>
			<HighlightedText>{`0${id}/`}</HighlightedText>
			<h5>{title}</h5>
			<p>{subtitle}</p>
		</article>
	);
};

export default StageElement;
