/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newAccordeon */ \"./src/modules/newAccordeon.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n_modules_scroll__WEBPACK_IMPORTED_MODULE_3___default()();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ (() => {

eval("var _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\"\"(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"js\\nconst scroll = () => {\\n  const scrollBtn = document.querySelector('.up'),\\n        servicesSection = document.querySelector('.services-section'); \\n\\n        const servicesSectionTop = servicesSection.getBoundingClientRect().top; //\\u0440\\u0430\\u0441\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435 \\u043E\\u0442 \\u0432\\u0435\\u0440\\u0445\\u043D\\u0435\\u0433\\u043E \\u043A\\u0440\\u0430\\u044F \\u0434\\u043E \\u0431\\u043B\\u043E\\u043A\\u0430\\n        scrollBtn.style.cssText = 'display: none';\\n\\n        window.addEventListener('scroll', () => {\\n          if (window.scrollY > servicesSectionTop) {\\n            scrollBtn.style.display = 'block';\\n          } else if (window.scrollY < servicesSectionTop) {\\n            scrollBtn.style.display = 'none';\\n          }\\n        })\\n\\n        scrollBtn.addEventListener('click', () => {\\n          window.scrollBy({\\n            top: -scrollTop,\\n            behavior: 'smooth'\\n          });\\n        })\\n};\\n\\n\\nexport default scroll;\\n\"])))(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\"])));\n\n//# sourceURL=webpack://Diplom/./src/modules/scroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb1e2b79078b637fa349")
/******/ })();
/******/ 
/******/ }
);