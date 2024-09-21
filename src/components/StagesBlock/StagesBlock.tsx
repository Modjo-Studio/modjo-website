import { workStages } from '../../utils/configs';
import { BLOCKS_ID } from '../../utils/constants';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import StageElement from '../StageElement/StageElement';
import styles from './StagesBlock.module.css';

type Props = {};

const StagesBlock = (props: Props) => {
	return (
		<BlockWrapper blockId={BLOCKS_ID.STAGES}>
			<div className={styles.block}>
				<h3 className='block__title'>Этапы работы</h3>
				<div className={styles.options}>
					{workStages.map((el, index) => {
						return <StageElement key={index} id={index + 1} {...el} />;
					})}
				</div>
			</div>
		</BlockWrapper>
	);
};

export default StagesBlock;
