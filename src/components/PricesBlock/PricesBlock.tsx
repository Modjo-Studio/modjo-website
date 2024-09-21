import BlockWrapper from '../BlockWrapper/BlockWrapper';
import { BLOCKS_ID } from '../../utils/constants';
import styles from './PricesBlock.module.css';
import { productList } from '../../utils/configs';
import ProductElement from '../ProductElement/ProductElement';

type Props = {};

const PricesBlock = (props: Props) => {
	return (
		<BlockWrapper blockId={BLOCKS_ID.PRICES}>
			<div className={styles.block}>
				<h3 className='block__title'>Стоимость</h3>
				<div className={styles.options}>
					{productList.map((el, index) => {
						return <ProductElement {...el} />;
					})}
				</div>
			</div>
		</BlockWrapper>
	);
};

export default PricesBlock;
