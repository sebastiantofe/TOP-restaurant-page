export default function home() {
	let homepage = document.createElement("div");
	homepage.classList.add("panel");
	homepage.classList.add("active-panel");

	const hero = document.createElement("div");
	hero.classList.add("hero");
	hero.innerHTML = `<h2 class="_2 header-title">The best</h2><h2 class="header-title"><strong class="important-text">Sushi</strong> restaurant</h2><h2 class="_3 header-title">in <strong>Colombia</strong></h2><h2 class="_4 header-title">123 Main Street, Bogotá, BOG 110121</h2>`;

	



	homepage.append(hero);
	return homepage;
}