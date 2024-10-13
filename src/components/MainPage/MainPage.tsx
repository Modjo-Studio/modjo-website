import React from 'react';
import SloganBlock from '../SloganBlock/SloganBlock';
import PricesBlock from '../PricesBlock/PricesBlock';
import StagesBlock from '../StagesBlock/StagesBlock';
import ContactsBlock from '../ContactsBlock/ContactsBlock';
import PrewievBlock from '../PrewievBlock';
import AboutBlock from '../AboutBlock';
import ProjectBlock from '../ProjectsBlock';

type Props = {};

const MainPage = (props: Props) => {
	return (
		<>
			<PrewievBlock />
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
