import BlockWrapper from '../BlockWrapper/BlockWrapper';
import styles from './styles.module.css';
import { BoldText } from './components/BoldText';
import { AboutCardsInfo } from './mocks';
import { AboutCard } from './components/AboutCard';

const AboutBlock = () => {
	return (
		<BlockWrapper minHeight='55dvh'>
			<div className={styles.block}>
				<h3 className={styles.title}>о нас</h3>
				<div className={styles.container}>
					<div className={styles.texts}>
						<p>Мы предлагаем полный спектр услуг, начиная от разработки концепции и дизайна, до программирования,
							тестирования и запуска готового продукта. <BoldText>Мы тщательно анализируем потребности и цели каждого клиента</BoldText>,
							чтобы создать <BoldText>индивидуальный и уникальный проект</BoldText>, который отражает ценности их бренда.</p>
						<p>Мы также обращаем особое внимание на удобство использования и дружественность для пользователя, чтобы
							каждый получал приятный и лёгкий опыт. Не важно, являетесь ли вы стартапом, небольшой компанией или
							крупным предприятием, мы готовы реализовать ваши идеи и превратить их <BoldText>в удивительные веб-решения!</BoldText></p>
					</div>
					<div className={styles.cards}>
						{
							AboutCardsInfo.map(({ title, texts }) => <AboutCard key={title} title={title} texts={texts} />)
						}
					</div>
				</div>
			</div>
		</BlockWrapper>
	);
};

export default AboutBlock;
