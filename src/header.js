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

	function selectTab(e) {

		// check for class 'selected-tab'
		if (e.target.className.includes('selected-tab')) {
			return
		} else {
			// remove class 'selected-tab'
			Array.from(tabs).forEach(function(tab) {
				tab.className = tab.className.replace(' selected-tab','');
			})
			// add class 'selected-tab' to clicked tab
			e.target.className += ' selected-tab';
		}
	}
	
	function togglePanel(e) {

		selectTab(e);


		const panelList = document.querySelectorAll(".panel");
		
		// Find index of navItems array to use it in accessing panels array
		let panelIndex = (function() {
			return navItems.findIndex( (tab) => {
				return tab === e.target.innerText
			})

		})();

		const panel = panelList[panelIndex]
		// already has class 'active-panel'? do nothing
		if (panel.className.includes('active-panel')) {
			return
		} else { 
			// remove class 'active-panel'
			panelList.forEach(function(panel) {
				panel.className = panel.className.replace(' active-panel','');
			});

			// add class 'active-panel' to selected panel

			panel.className+= ' active-panel';



		}




		// console.log(panelList[0]);
	}


	let keys = Array.from(tabs);
	keys.forEach(key => key.addEventListener('click', togglePanel));

	return header;
}

