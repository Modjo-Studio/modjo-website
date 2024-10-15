import { useEffect, useState } from 'react';

const getWindowSize = () => {
	const {innerWidth, innerHeight} = window;
	return {innerWidth, innerHeight};
}

export const useMobileDimension = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (windowSize.innerWidth <= 768);
};
