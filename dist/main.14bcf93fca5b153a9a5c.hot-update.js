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

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalWindow = function modalWindow() {\n  var callbackBtn = document.querySelectorAll('.callback-btn'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      // modalClose = document.querySelector('.modal-close'),\n  buttonServices = document.querySelector('.button-services'),\n      imgWrapperBefore = document.querySelectorAll('.img-wrapper:before');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.button-services')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n\n    if (target.closest('.callback-btn')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n\n    if (target.closest('.img-wrapper:before')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.modal-close')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n\n    if (target.closest('.modal-overlay')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://Diplom/./src/modules/modalWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a43924129fb4e5cb936")
/******/ })();
/******/ 
/******/ }
);