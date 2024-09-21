import styles from './ProductElements.module.css';

export type ProductElementType = {
	title: string;
	subtitle: string;
	timeframe: string;
	priceFrom: number;
};

const ProductElement = ({
	priceFrom,
	subtitle,
	timeframe,
	title,
}: ProductElementType) => {
	return (
		<article className={styles.product__card}>
			<div className={styles.card__header}>
				<h5 className={styles.card__title}>{title}</h5>
				<span className={styles.card__price}>{`от ${priceFrom} ₽`}</span>
			</div>
			<p className={styles.card__subtitle}>{subtitle}</p>
			<div className={styles.card__footer}>
				<span>{`Срок разработки от ${timeframe}`}</span>
			</div>
		</article>
	);
};

export default ProductElement;
