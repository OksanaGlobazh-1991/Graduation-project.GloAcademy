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

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var scrollBtn = document.querySelector('.up'),\n      servicesSection = document.querySelector('.services-section');\n  var servicesSectionTop = servicesSection.getBoundingClientRect().top; //расстояние от верхнего края до блока\n\n  scrollBtn.style.cssText = 'display: none';\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > servicesSectionTop) {\n      scrollBtn.style.display = 'block';\n      scrollBtn.addEventListener('click', function () {\n        window.scrollBy({\n          top: -scrollTop,\n          behavior: 'smooth'\n        });\n      });\n    } else if (window.scrollY < servicesSectionTop) {\n      scrollBtn.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://Diplom/./src/modules/scroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e54e70dedf97d1ce79b")
/******/ })();
/******/ 
/******/ }
);