import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/landing';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</div>
	);
};

export default App;
