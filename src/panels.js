import home from './panels/home';
import menu from './panels/menu';
import chef from './panels/chef';
import location from './panels/location';
import contact from './panels/contact';

export default function panels() {
	let panels = document.createElement('div');
	panels.appendChild(home());
	panels.appendChild(menu());
	
	return panels
};