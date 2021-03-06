export default function location() {
	let location = document.createElement("div");

	location.classList.add("panel");
	location.id="location";
	location.innerHTML = "<h1> LOCATION </h1>";

	let mapContainer = document.createElement("div");
	mapContainer.id = "map";
	mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d419.2234872191172!2d-74.10068636118288!3d4.645803834034181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa084b543f32e5847!2sURBAN%20SUSHI%20WOK!5e0!3m2!1ses!2sus!4v1614753620308!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	
	location.appendChild(mapContainer);

	return location;
}
