import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/tunnbrödsrulle">
				Tunnbrödsrulle
			</NavLink>
      <NavLink exact to="/pickled-herring">
				Pickled Herring
			</NavLink>
			<NavLink exact to="/aquavit">
				Aquavit
			</NavLink>
		</nav>
	);
};

export default Navbar;
