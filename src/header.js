export default function createHeader() {
	let header = document.createElement("nav");
	header.classList.add("header");	
	const navItems = ["HOME", "MENU", "CHEF", "LOCATION", "CONTACT"]
	const logo = document.createElement("h1");
	logo.classList.add("logo");
	logo.innerHTML = "ZOOSHI";
	header.appendChild(logo);

	let navigation = document.createElement("div");
	navigation.classList.add("navigation")

	navItems.forEach(function(item) {
		let anchor = document.createElement("a");
		anchor.href = `#${item}`;

		let tab = document.createElement("div");
				tab.classList.add("navItem");
		tab.innerHTML = item;

		anchor.appendChild(tab);
		navigation.appendChild(anchor);
	})
	header.appendChild(navigation);

	const tabs = header.getElementsByClassName("navItem");

	tabs[0].classList.add("selected-tab");
	const social = ["facebook", "twitter", "instagram", "youtube"];
	social.forEach(function(logo) {
		header.innerHTML += `<a href="https://www.${logo}.com/zooshirestaurant" target="_blank" > 
		<img src='${logo}.svg' alt="${logo} icon" class="social-icon" /> </a>`;
		
	})
	
	function togglePanel() {

		const panelList = document.querySelectorAll(".panel");
		console.log(panelList);
	}


	let keys = Array.from(tabs);
	keys.forEach(key => key.addEventListener('click', togglePanel));

	return header;
}
