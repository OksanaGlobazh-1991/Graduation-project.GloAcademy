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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newAccordeon */ \"./src/modules/newAccordeon.js\");\n/* harmony import */ var _modules_newScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newScroll */ \"./src/modules/newScroll.js\");\n/* harmony import */ var _modules_newSendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/newSendForm */ \"./src/modules/newSendForm.js\");\n/* harmony import */ var _modules_carusel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carusel */ \"./src/modules/carusel.js\");\n/* harmony import */ var _modules_newSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/newSlider */ \"./src/modules/newSlider.js\");\n/* harmony import */ var _modules_servisesOur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/servisesOur */ \"./src/modules/servisesOur.js\");\n\n\n\n\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_newScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_newSendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_carusel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_newSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_servisesOur__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/servisesOur.js":
/*!************************************!*\
  !*** ./src/modules/servisesOur.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servisesOur = function servisesOur() {\n  var position = 0;\n  var slidesToShow = 3;\n  var slidesToScroll = 2;\n  var container = document.querySelector('.slider-list');\n  var track = document.querySelector('.slider-track');\n  var btnPrev = document.querySelector('.prev');\n  var btnNext = document.querySelector('.next');\n  var items = document.querySelectorAll('.slide-wrapper');\n  var itemsCount = items.length;\n  var itemWidth = container.clientWidth / slidesToShow;\n  var movePosition = slidesToScroll * itemWidth;\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n  btnPrev.addEventListener('click', function () {\n    var itemsLeft = Math.abs(position) / itemWidth;\n    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n  btnNext.addEventListener('click', function () {\n    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\n    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  var checkBtns = function checkBtns() {\n    btnPrev.disabled = position === 0;\n    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;\n  };\n\n  checkBtns();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servisesOur);\n\n//# sourceURL=webpack://Diplom/./src/modules/servisesOur.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("587a07571a85286fb88b")
/******/ })();
/******/ 
/******/ }
);