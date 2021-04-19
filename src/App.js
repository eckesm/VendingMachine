import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Tunnbrödsrulle from './Tunnbrödsrulle';
import PickledHerring from './PickledHerring';
import Aquavit from './Aquavit'
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/tunnbrödsrulle">
					<Tunnbrödsrulle />
				</Route>
				<Route exact path="/pickled-herring">
					<PickledHerring />
				</Route>
				<Route exact path="/aquavit">
					<Aquavit />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
