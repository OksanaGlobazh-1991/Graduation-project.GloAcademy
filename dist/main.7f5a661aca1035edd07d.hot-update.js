"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplom"]("main",{

/***/ "./src/modules/servicePrices.js":
/*!**************************************!*\
  !*** ./src/modules/servicePrices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicePrices = function servicePrices() {\n  var menu = document.querySelectorAll('a['),\n      prices = document.getElementById('services'),\n      answers = document.getElementById('faq'),\n      contacts = document.getElementById('contacts'); // function handleButtonClick() {\n  //   prices.scrollIntoView({block: 'end', behavior: 'smooth'})\n  //   }\n\n  menu.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      if (elem[0]) {\n        prices.scrollIntoView({\n          block: 'end',\n          behavior: 'smooth'\n        });\n      }\n    });\n  }); // <section class=\"services-section gray-bg\" id=\"services\">\n  // <section class=\"accordeon-section\" id=\"faq\">\n  // <section class=\"contacts-section dark-bg\" id=\"contacts\">\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicePrices);\n\n//# sourceURL=webpack://Diplom/./src/modules/servicePrices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a772b5fef93e23df8ca6")
/******/ })();
/******/ 
/******/ }
);