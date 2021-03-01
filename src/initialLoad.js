import createHeader from './header';




export default function initialLoad() {
	const body = document.getElementById("content");
	let header = createHeader();
	body.appendChild(header);
};

