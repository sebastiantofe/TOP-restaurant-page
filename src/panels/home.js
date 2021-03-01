export default function home() {
	let homepage = document.createElement("div");
	homepage.classList.add("panel");
	homepage.classList.add("active-panel");

	const hero = document.createElement("div");
	hero.classList.add("hero");
	hero.innerHTML = `<h2 class="_2 header-title">The best</h2><h2 class="header-title"><strong class="important-text">Sushi</strong> restaurant</h2><h2 class="_3 header-title">in <strong>Colombia</strong></h2><h2 class="_4 header-title">123 Main Street, Bogotá, BO 110121</h2>`;

	homepage.append(hero);
	return homepage;
}

(function () {
	function TabbedNavigation(element) {
		this.element = element;
		this.navigation = this.element.getElementsByClassName(
			"cd-tabs__navigation"
		)[0];
		this.navigationElements = this.navigation.getElementsByClassName(
			"cd-tabs__list"
		)[0];
		this.content = this.element.getElementsByClassName("cd-tabs__panels")[0];
		this.activeTab;
		this.activeContent;
		this.init();
	}
	TabbedNavigation.prototype.init = function () {
		var self = this;
		this.navigation.addEventListener("click", function (event) {
			event.preventDefault();
			var selectedItem = event.target.closest(".cd-tabs__item");
			if (
				selectedItem &&
				!Util.hasClass(selectedItem, "cd-tabs__item--selected")
			) {
				self.activeTab = selectedItem;
				self.activeContent = document.getElementById(
					self.activeTab.getAttribute("href").replace("#", "")
				);
				self.updateContent();
			}
		});
		this.navigationElements.addEventListener("scroll", function (event) {
			self.toggleNavShadow();
		});
	};
	TabbedNavigation.prototype.updateContent = function () {
		var self = this;
		var actualHeight = this.content.offsetHeight;
		Util.removeClass(
			this.navigation.querySelectorAll(".cd-tabs__item--selected")[0],
			"cd-tabs__item--selected"
		);
		Util.addClass(this.activeTab, "cd-tabs__item--selected");
		Util.removeClass(
			this.content.querySelectorAll(".cd-tabs__panel--selected")[0],
			"cd-tabs__panel--selected"
		);
		Util.addClass(this.activeContent, "cd-tabs__panel--selected");
		if (
			window.requestAnimationFrame &&
			window.getComputedStyle(this.element).getPropertyValue("display") ==
				"block"
		) {
			Util.setHeight(
				actualHeight,
				this.activeContent.offsetHeight,
				this.content,
				200,
				function () {
					self.content.removeAttribute("style");
				}
			);
		}
	};
	TabbedNavigation.prototype.toggleNavShadow = function () {
		this.content.removeAttribute("style");
		var navItems = this.navigationElements.getElementsByClassName(
				"cd-tabs__item"
			),
			navigationRight = Math.floor(
				this.navigationElements.getBoundingClientRect().right
			),
			lastItemRight = Math.ceil(
				navItems[navItems.length - 1].getBoundingClientRect().right
			);
		navigationRight >= lastItemRight
			? Util.addClass(this.element, "cd-tabs--scroll-ended")
			: Util.removeClass(this.element, "cd-tabs--scroll-ended");
	};
	var tabs = document.getElementsByClassName("js-cd-tabs"),
		tabsArray = [],
		resizing = false;
	if (tabs.length > 0) {
		for (var i = 0; i < tabs.length; i++) {
			(function (i) {
				tabsArray.push(new TabbedNavigation(tabs[i]));
			})(i);
		}
		window.addEventListener("resize", function (event) {
			if (!resizing) {
				resizing = true;
				!window.requestAnimationFrame
					? setTimeout(checkTabs, 250)
					: window.requestAnimationFrame(checkTabs);
			}
		});
	}
	function checkTabs() {
		tabsArray.forEach(function (tab) {
			tab.toggleNavShadow();
		});
		resizing = false;
	}
})();
