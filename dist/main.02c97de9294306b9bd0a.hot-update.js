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

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var topSlider = document.querySelector('.top-slider'),\n      itemRelative = document.querySelectorAll('.item');\n  var currentSlide = 0; //номер слайда\n\n  itemRelative.forEach(function (item) {\n    if (item[0]) {\n      item.classList.add('item-active');\n      item.style.cssText = 'opacity: 1; transition: opacity .5s;';\n    } else {\n      item.style.cssText = 'opacity: 0; transition: opacity .5s;';\n    }\n  });\n\n  var autoPlaySlide = function autoPlaySlide() {\n    itemRelative[currentSlide].classList.remove('item-active');\n    currentSlide++;\n    itemRelative[currentSlide].classList.add('item-active');\n  };\n\n  var startSlide = function startSlide() {\n    setI;\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://Diplom/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1de4218affe0a35c9a2")
/******/ })();
/******/ 
/******/ }
);