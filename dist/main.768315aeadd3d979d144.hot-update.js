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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicePrices = function servicePrices() {\n  var menu = document.querySelectorAll('a[href*=\"#\"]');\n  menu.forEach(function (elem) {\n    elem.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockID = elem.getAttribute('href');\n      document.querySelector('' + blockID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicePrices);\n\n//# sourceURL=webpack://Diplom/./src/modules/servicePrices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("734b67ce9e3a31ba1417")
/******/ })();
/******/ 
/******/ }
);