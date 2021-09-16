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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ourServices */ \"./src/modules/ourServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeonParent = document.querySelector('.accordeon'),\n      element = document.querySelectorAll('.element'),\n      elementContent = document.querySelectorAll('.element-content'),\n      //текст\n  title = document.querySelectorAll('.title'); //заголовок\n\n  element.forEach(function (item) {\n    item.addEventListener('click', function (event) {\n      element.forEach(function (item) {\n        item.classList.remove('active');\n        elementContent.forEach(function (elem) {\n          if (elem.style.display = 'none') {\n            elem.style.display = 'bl';\n          }\n        });\n      });\n      event.target.closest('.element').classList.add('active');\n      elementContent.forEach(function (elem) {\n        if (elem.style.display = 'none') {\n          elem.style.display = 'block';\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("596eb57340492e27808a")
/******/ })();
/******/ 
/******/ }
);