import React from 'react';
import SloganBlock from '../SloganBlock/SloganBlock';
import PricesBlock from '../PricesBlock/PricesBlock';
import StagesBlock from '../StagesBlock/StagesBlock';

type Props = {};

const MainPage = (props: Props) => {
	return (
		<>
			<SloganBlock />
			<PricesBlock />
			<StagesBlock />
		</>
	);
};

export default MainPage;
