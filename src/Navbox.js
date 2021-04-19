import { NavLink } from 'react-router-dom';
import './Navbox.css'

const Navbox = () => {
	return (
		<div className="Navbox">
      <h1 className="Navbox-heading">So what will it be?</h1>
			<NavLink exact to="/tunnbrödsrulle">
				Tunnbrödsrulle
			</NavLink>
			<NavLink exact to="/pickled-herring">
				Pickled Herring
			</NavLink>
			<NavLink exact to="/aquavit">
				Aquavit
			</NavLink>
		</div>
	);
};

export default Navbox;
