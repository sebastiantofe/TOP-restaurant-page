/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n\tlet header = document.createElement(\"nav\");\n\theader.classList.add(\"header\");\t\n\tconst navItems = [\"HOME\", \"MENU\", \"CHEF\", \"LOCATION\", \"CONTACT\"]\n\tconst logo = document.createElement(\"h1\");\n\tlogo.classList.add(\"logo\");\n\tlogo.innerHTML = \"ZOOSHI\";\n\theader.appendChild(logo);\n\n\tlet navigation = document.createElement(\"div\");\n\tnavigation.classList.add(\"navigation\")\n\n\tnavItems.forEach(function(item) {\n\t\tlet anchor = document.createElement(\"a\");\n\t\tanchor.href = `#${item}`;\n\n\t\tlet tab = document.createElement(\"div\");\n\t\t\t\ttab.classList.add(\"navItem\");\n\t\ttab.innerHTML = item;\n\n\t\tanchor.appendChild(tab);\n\t\tnavigation.appendChild(anchor);\n\t})\n\theader.appendChild(navigation);\n\n\tconst tabs = header.getElementsByClassName(\"navItem\");\n\n\ttabs[0].classList.add(\"selected-tab\");\n\tconst social = [\"facebook\", \"twitter\", \"instagram\", \"youtube\"];\n\tsocial.forEach(function(logo) {\n\t\theader.innerHTML += `<a href=\"https://www.${logo}.com/zooshirestaurant\" target=\"_blank\" > \n\t\t<img src='${logo}.svg' alt=\"${logo} icon\" class=\"social-icon\" /> </a>`;\n\t\t\n\t})\n\n\tfunction selectTab(e) {\n\n\t\t// check for class 'selected-tab'\n\t\tif (e.target.className.includes('selected-tab')) {\n\t\t\treturn\n\t\t} else {\n\t\t\t// remove class 'selected-tab'\n\t\t\tArray.from(tabs).forEach(function(tab) {\n\t\t\t\ttab.className = tab.className.replace(' selected-tab','');\n\t\t\t})\n\t\t\t// add class 'selected-tab' to clicked tab\n\t\t\te.target.className += ' selected-tab';\n\t\t}\n\t}\n\t\n\tfunction togglePanel(e) {\n\n\t\tselectTab(e);\n\n\n\t\tconst panelList = document.querySelectorAll(\".panel\");\n\t\tconsole.log(panelList)\n\t\t// Find index of navItems array to use it in accessing panels array\n\t\tlet panelIndex = (function() {\n\t\t\treturn navItems.findIndex( (tab) => {\n\t\t\t\treturn tab === e.target.innerText\n\t\t\t})\n\n\t\t})();\n\n\t\tconst panel = panelList[panelIndex]\n\t\t// already has class 'active-panel'? do nothing\n\t\tif (panel.className.includes('active-panel')) {\n\t\t\treturn\n\t\t} else { \n\t\t\t// remove class 'active-panel'\n\t\t\tpanelList.forEach(function(panel) {\n\t\t\t\tpanel.className = panel.className.replace(' active-panel','');\n\t\t\t});\n\n\t\t\t// add class 'active-panel' to selected panel\n\n\t\t\tpanel.className+= ' active-panel';\n\n\n\n\t\t}\n\n\n\n\n\t\t// console.log(panelList[0]);\n\t}\n\n\n\tlet keys = Array.from(tabs);\n\tkeys.forEach(key => key.addEventListener('click', togglePanel));\n\n\treturn header;\n}\n\n\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n\nwindow.onload = (0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n\nlet link1 = '<div>Icons made by <a href=\"https://www.freepik.com\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>'\n\t\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panels */ \"./src/panels.js\");\n\n\n\n\nfunction initialLoad() {\n\tconst body = document.getElementById(\"content\");\n\tlet header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n\tlet content = (0,_panels__WEBPACK_IMPORTED_MODULE_1__.default)();\n\tbody.appendChild(header);\n\tbody.appendChild(content);\n\n\n};\n\n\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/initialLoad.js?");

/***/ }),

/***/ "./src/panels.js":
/*!***********************!*\
  !*** ./src/panels.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ panels)\n/* harmony export */ });\n/* harmony import */ var _panels_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panels/home */ \"./src/panels/home.js\");\n/* harmony import */ var _panels_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panels/menu */ \"./src/panels/menu.js\");\n/* harmony import */ var _panels_chef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panels/chef */ \"./src/panels/chef.js\");\n/* harmony import */ var _panels_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panels/location */ \"./src/panels/location.js\");\n/* harmony import */ var _panels_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels/contact */ \"./src/panels/contact.js\");\n\n\n\n\n\n\nfunction panels() {\n\tlet panels = document.createElement('div');\n\tpanels.id=\"panels-container\";\n\tpanels.appendChild((0,_panels_home__WEBPACK_IMPORTED_MODULE_0__.default)());\n\tpanels.appendChild((0,_panels_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\n\tpanels.appendChild((0,_panels_chef__WEBPACK_IMPORTED_MODULE_2__.default)());\n\tpanels.appendChild((0,_panels_location__WEBPACK_IMPORTED_MODULE_3__.default)());\n\tpanels.appendChild((0,_panels_contact__WEBPACK_IMPORTED_MODULE_4__.default)());\n\t\n\treturn panels\n};\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels.js?");

/***/ }),

/***/ "./src/panels/chef.js":
/*!****************************!*\
  !*** ./src/panels/chef.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chef)\n/* harmony export */ });\nfunction chef() {\n\tlet chef = document.createElement('div');\n\n\tchef.classList.add('panel');\n\n\tchef.innerHTML = \"<h1> CHEF </h1>\";\n\n\treturn chef\n};\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels/chef.js?");

/***/ }),

/***/ "./src/panels/contact.js":
/*!*******************************!*\
  !*** ./src/panels/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\tlet contact = document.createElement('div');\n\n\tcontact.classList.add('panel');\n\n\tcontact.innerHTML = \"<h1> CONTACT </h1>\";\n\n\treturn contact\n};\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels/contact.js?");

/***/ }),

/***/ "./src/panels/home.js":
/*!****************************!*\
  !*** ./src/panels/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n\tlet homepage = document.createElement(\"div\");\n\thomepage.classList.add(\"panel\");\n\thomepage.classList.add(\"active-panel\");\n\n\tconst hero = document.createElement(\"div\");\n\thero.classList.add(\"hero\");\n\thero.innerHTML = `<h2 class=\"_2 header-title\">The best</h2><h2 class=\"header-title\"><strong class=\"important-text\">Sushi</strong> restaurant</h2><h2 class=\"_3 header-title\">in <strong>Colombia</strong></h2><h2 class=\"_4 header-title\">123 Main Street, Bogotá, BOG 110121</h2>`;\n\n\t\n\n\n\n\thomepage.append(hero);\n\treturn homepage;\n}\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels/home.js?");

/***/ }),

/***/ "./src/panels/location.js":
/*!********************************!*\
  !*** ./src/panels/location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ location)\n/* harmony export */ });\nfunction location() {\n\tlet location = document.createElement('div');\n\n\tlocation.classList.add('panel');\n\n\tlocation.innerHTML = \"<h1> LOCATION </h1>\";\n\n\treturn location\n};\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels/location.js?");

/***/ }),

/***/ "./src/panels/menu.js":
/*!****************************!*\
  !*** ./src/panels/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\n\tlet menus = document.createElement('div');\n\tmenus.classList.add('panel');\n\tmenus.classList.add('menu');\n\tmenus.innerHTML = `<h1> MENU</h1>`\n\n\n\treturn menus\n\n};\n\n//# sourceURL=webpack://TOP-restaurant-page/./src/panels/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;