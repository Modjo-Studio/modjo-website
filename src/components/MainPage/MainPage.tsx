import React from 'react';
import SloganBlock from '../SloganBlock/SloganBlock';
import PricesBlock from '../PricesBlock/PricesBlock';

type Props = {};

const MainPage = (props: Props) => {
	return (
		<>
			<SloganBlock />
			<PricesBlock />
		</>
	);
};

export default MainPage;
