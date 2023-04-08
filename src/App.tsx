

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import HomeView from './pages/Home';

import './App.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<HomeView />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;