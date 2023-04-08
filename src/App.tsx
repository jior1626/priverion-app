

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';

import HomeView from './pages/Home';
import CreateFormView from './pages/Create';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<HomeView />} />
			<Route path="/create" element={<CreateFormView />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;