import BlockWrapper from '../BlockWrapper/BlockWrapper';
import HighlightedText from '../HighlightedText/HighlightedText';
import styles from './SloganBlock.module.css';

type Props = {};

const SloganBlock = (props: Props) => {
	return (
		<BlockWrapper minHeight='55dvh'>
			<div className={styles.block}>
				<h2 className={styles.title}>
					превращаем ваши мечты в цифровую реальность. создаём веб-проекты,{' '}
					<HighlightedText>которые вдохновляют</HighlightedText>
				</h2>
				<div className={styles.subtitles}>
					<p className={styles.subtitle}>
						Мы уделяем особое внимание дизайну, удобству и оптимизации,
						чтобы ваш сайт был не только красивым, но и эффективным инструментом
						продвижения
					</p>
					<p className={styles.subtitle}>
						Обратитесь к нам сегодня, и мы обеспечим вас надёжными
						и инновационными решениями для вашего бизнеса!
					</p>
				</div>
			</div>
		</BlockWrapper>
	);
};

export default SloganBlock;
