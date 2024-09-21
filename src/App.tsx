import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import PageWrapper from './components/PageWrapper/PageWrapper';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PageWrapper>
				<MainPage />
			</PageWrapper>
		),
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
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
