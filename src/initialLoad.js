import createHeader from './header';
import panels from './panels';


export default function initialLoad() {
	const body = document.getElementById("content");
	let header = createHeader();
	let content = panels();
	body.appendChild(header);
	body.appendChild(content);


};

