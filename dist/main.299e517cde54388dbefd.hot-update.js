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

/***/ "./src/modules/servisesOur.js":
/*!************************************!*\
  !*** ./src/modules/servisesOur.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servisesOur = function servisesOur() {\n  var position = 0;\n  var slidesToShow = 3;\n  var slidesToScroll = 2;\n  var container = document.querySelector('.slider-list');\n  var track = document.querySelector('.slider-track');\n  var btnPrev = document.querySelector('.prev');\n  var btnNext = document.querySelector('.next');\n  var items = document.querySelectorAll('.slide-wrapper');\n  var itemsCount = items.length;\n  var itemWidth = container.clientWidth / slidesToShow;\n  var movePosition = slidesToScroll * itemWidth;\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n  btnPrev.addEventListener('click', function () {\n    var itemsLeft = Math.abs(position) / itemWidth;\n    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n  btnNext.addEventListener('click', function () {\n    var itemsLeft = itemsCount - Math.abs(position) * slidesToShow * itemWidth / itemWidth;\n    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  var checkBtns = function checkBtns() {\n    btnPrev.disabled = position === 0;\n    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;\n  };\n\n  checkBtns();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servisesOur);\n\n//# sourceURL=webpack://Diplom/./src/modules/servisesOur.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d75ee58d86c896c31e28")
/******/ })();
/******/ 
/******/ }
);