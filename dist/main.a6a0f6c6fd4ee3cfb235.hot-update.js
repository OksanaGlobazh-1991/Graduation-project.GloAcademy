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

/***/ "./src/modules/newSlider.js":
/*!**********************************!*\
  !*** ./src/modules/newSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar newSlider = function newSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table');\n  table.forEach(function (item, i) {\n    item.classList = 'dog';\n\n    if (i === 0) {\n      item.classList = 'dog dog-active';\n    }\n  });\n  var currentSlide = 0;\n\n  var autoPlaySlide = function autoPlaySlide() {\n    table[currentSlide].classList.remove('dog dog-active');\n    currentSlide++;\n    itemSlide[currentSlide].classList.add('dog dog-active');\n  };\n\n  var startSlide = function startSlide() {};\n\n  var stopSlide = function stopSlide() {};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSlider);\n\n//# sourceURL=webpack://Diplom/./src/modules/newSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e497bc91a19204a878df")
/******/ })();
/******/ 
/******/ }
);