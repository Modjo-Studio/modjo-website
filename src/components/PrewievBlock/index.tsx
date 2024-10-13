import BlockWrapper from '../BlockWrapper/BlockWrapper';
import styles from './styles.module.css';
import HighlightedText from '../HighlightedText/HighlightedText';
import { Button } from './components/Button';
import scrollToBlock from '../../utils/scrollToBlock';
import { BLOCKS_ID } from '../../utils/constants';

const PrewievBlock = () => {
	return (
		<BlockWrapper minHeight='55dvh'>
			<div className={styles.block}>
				<h2 className={styles.title}>сОЗДАЁМ
					ВЕБ САЙТЫ, КОТОРЫЕ
					ПРИВОДЯТ ВАС <HighlightedText>К РЕЗУЛЬТАТАМ</HighlightedText>
				</h2>
				<div className={styles.texts}>
					<p className={styles.text}>Наша веб студия занимается дизайном, разработкой и продвижением сайтов любой сложности.</p>
					<p className={styles.text}>Свяжитесь с нами сегодня, и мы поможем воплоотить ваши бизнес идеи в реальность</p>
				</div>
				<Button onClick={() => scrollToBlock(BLOCKS_ID.CONTACTS)} text="ОБСУДИТЬ ПРОЕКТ"/>
			</div>
		</BlockWrapper>
	);
};

export default PrewievBlock;
