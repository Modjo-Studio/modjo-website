import { FC, useState } from 'react';
import { useMobileDimension } from './hooks/useMobileDimension';
import { FooterMobile } from './components/FooterMobile';
import { FooterDesktop } from './components/FooterDesktop';

const Footer: FC = () => {
	const isMobile = useMobileDimension();
	const [isOpen, setIsOpen] = useState(false);

	return isMobile ? <FooterMobile isOpen={isOpen} setIsOpen={setIsOpen} /> : <FooterDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
};

export default Footer;
