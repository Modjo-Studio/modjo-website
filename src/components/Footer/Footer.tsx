import { FC } from 'react';
import { useMobileDimension } from './hooks/useMobileDimension';
import { FooterMobile } from './components/FooterMobile';
import { FooterDesktop } from './components/FooterDesktop';

const Footer: FC = () => {
	const isMobile = useMobileDimension();

	return isMobile ? <FooterMobile /> : <FooterDesktop />
};

export default Footer;
