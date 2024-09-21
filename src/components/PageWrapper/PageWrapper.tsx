import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Props = {
	children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default PageWrapper;
