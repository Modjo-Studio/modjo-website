import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <>Упс...Ошибка</>,
	},
	{
		path: '/projects/*',
		element: <>проекты</>,
		errorElement: <>Упс...Ошибка</>,
	},
]);

function App() {
	return (
		<div className='app'>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
