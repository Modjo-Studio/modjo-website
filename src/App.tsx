import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import PageWrapper from './components/PageWrapper/PageWrapper';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PageWrapper>
				<MainPage />
			</PageWrapper>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: '/projects/*',
		element: <>проекты</>,
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return (
		<main className='app'>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
