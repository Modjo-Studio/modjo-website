import BlockWrapper from '../BlockWrapper/BlockWrapper';
import styles from './ContactsBlock.module.css';
import { ReactComponent as Phone } from '@svg/telephone.svg';
import { ReactComponent as Telegram } from '@svg/telegram.svg';
import { ReactComponent as Mail } from '@svg/mail.svg';
import { ReactComponent as Whatsapp } from '@svg/whatsapp.svg';
import { ReactComponent as Behance } from '@svg/behance.svg';
import { BLOCKS_ID } from '../../utils/constants';

type Props = {};

const ContactsBlock = (props: Props) => {
	return (
		<BlockWrapper blockId={BLOCKS_ID.CONTACTS} minHeight='55dvh'>
			<div className={styles.block}>
				<h3 className='block__title'>Контакты</h3>
				<div className={styles.options}>
					<article className={styles.element}>
						<Phone />
						<span>телефон</span>
						<a href='tel:+79991846815'>+7 (999) 184 68-15</a>
					</article>
					<article className={styles.element}>
						<Telegram />
						<span>телеграм</span>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							ПЕРЕЙТИ
						</a>
					</article>
					<article className={styles.element}>
						<Mail />
						<span>почта</span>
						<a href='mailto:modjo2024@gmail.com'>modjo2024@gmail.com</a>
					</article>
					<article className={styles.element}>
						<Whatsapp />
						<span>Whatsapp</span>
						<a href='tel:+79991846815'>+7 (999) 184 68-15</a>
					</article>
					<article className={styles.element}>
						<Behance />
						<span>Behance</span>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							ПЕРЕЙТИ
						</a>
					</article>
				</div>
			</div>
		</BlockWrapper>
	);
};

export default ContactsBlock;
