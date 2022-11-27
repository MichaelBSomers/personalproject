import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
