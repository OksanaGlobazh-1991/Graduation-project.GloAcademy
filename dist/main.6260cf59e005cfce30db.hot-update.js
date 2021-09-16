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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ourServices */ \"./src/modules/ourServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n_modules_accordeon__WEBPACK_IMPORTED_MODULE_4___default()();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ (() => {

eval("var _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\"\"(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"js\\nconst accordeon = () => {\\n    const accordeonParent = document.querySelector('.accordeon'),\\n          element = document.querySelectorAll('.element'),\\n          elementContent = document.querySelectorAll('.element-content'), //\\u0442\\u0435\\u043A\\u0441\\u0442\\n          title = document.querySelectorAll('.title'); //\\u0437\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A\\n\\n          const toggleAccordeon = (index) => {\\n            \\n            for (let i = 0; i < element.length; i++) {\\n              if (index === i) {\\n                element[i].classList.add('active');\\n              } else {\\n                element[i].classList.remove('active');\\n              }\\n            }\\n\\n            for (let i = 0; i < elementContent.length; i++) {\\n              if (index === i) {\\n                elementContent[i].style.display = 'block';\\n              } else {\\n                elementContent[i].style.display = 'none';\\n              }\\n            }\\n          };\\n\\n          accordeonParent.addEventListener('click', (event) => {\\n            let target = event.target;\\n\\n            if (target.classList.contains('title')) {\\n              title.forEach((item, i) => {\\n                if (item === target) {\\n                  toggleAccordeon(i);\\n                }\\n              });\\n            }\\n          })\\n};\\nexport default accordeon;\\n\"])))(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\"])));\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

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
/******/ 	__webpack_require__.h = () => ("0ef8cca375d75f0fbe6e")
/******/ })();
/******/ 
/******/ }
);