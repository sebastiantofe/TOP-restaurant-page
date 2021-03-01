export default function createHeader() {
	let header = document.createElement("nav");
	
	const navItems = ["HOME", "MENU", "CHEF", "LOCATION", "CONTACT"]
	header.innerHTML = "<h1 class='logo'> ZOOSHI </h1>"
	navItems.forEach(function(item) {
		header.innerHTML += `<div class='navItem' > ${item} </div>`;

	})
	const social = ["facebook", "twitter", "instagram", "youtube"];
	social.forEach(function(logo) {
		header.innerHTML += `<a href="https://www.${logo}.com/zooshirestaurant" target="_blank" > 
		<img src='${logo}.svg' alt="${logo} icon" class="social-icon" /> </a>`;
		
	})
	

	
	return header;
}
