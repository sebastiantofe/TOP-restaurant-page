import home from './panels/home';
import menu from './panels/menu';
import chef from './panels/chef';
import location from './panels/location';
import contact from './panels/contact';

export default function panels() {
	let panels = document.createElement('div');
	panels.id="panels-container";
	panels.appendChild(home());
	panels.appendChild(menu());
	panels.appendChild(chef());
	panels.appendChild(location());
	panels.appendChild(contact());
	
	return panels
};