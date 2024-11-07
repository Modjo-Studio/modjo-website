import SloganBlock from '../SloganBlock/SloganBlock';
import PricesBlock from '../PricesBlock/PricesBlock';
import StagesBlock from '../StagesBlock/StagesBlock';
import ContactsBlock from '../ContactsBlock/ContactsBlock';
import PreviewBlock from '../PreviewBlock';
import AboutBlock from '../AboutBlock';
import ProjectBlock from '../ProjectsBlock';

type Props = {};

const MainPage = (props: Props) => {
	return (
		<>
			<PreviewBlock />
			<AboutBlock />
			<ProjectBlock />
			<SloganBlock />
			<PricesBlock />
			<StagesBlock />
			<ContactsBlock />
		</>
	);
};

export default MainPage;
