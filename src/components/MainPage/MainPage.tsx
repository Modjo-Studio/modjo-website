import React from 'react';
import SloganBlock from '../SloganBlock/SloganBlock';
import PricesBlock from '../PricesBlock/PricesBlock';
import StagesBlock from '../StagesBlock/StagesBlock';
import ContactsBlock from '../ContactsBlock/ContactsBlock';

type Props = {};

const MainPage = (props: Props) => {
	return (
		<>
			<SloganBlock />
			<PricesBlock />
			<StagesBlock />
			<ContactsBlock />
		</>
	);
};

export default MainPage;
