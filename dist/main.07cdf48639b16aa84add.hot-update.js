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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servisesOur = function servisesOur() {\n  var position = 0;\n  var slidesToShow = 1;\n  var slidesToScroll = 1; //  const sliderList =\n\n  var sliderTrack = document.querySelector('.slider-track');\n  var sliderItem = document.querySelector('.slide');\n  var sliderItems = document.querySelectorAll('.slide');\n  var itemsCount = sliderItems.length;\n  var prevBtn = document.querySelector('.prev');\n  var nextBtn = document.querySelector('.next');\n  var itemWidth = sliderItem.clientWidth / slidesToShow;\n  var movePosition = slidesToScroll * itemWidth;\n  sliderItems.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n  prevBtn.addEventListener('click', function () {\n    position += movePosition;\n    setPosition();\n    checkBtn();\n  });\n  nextBtn.addEventListener('click', function () {\n    position -= movePosition;\n    setPosition();\n    checkBtn();\n  });\n\n  var setPosition = function setPosition() {\n    sliderTrack.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  var checkBtn = function checkBtn() {\n    if (position === 0) {\n      prevBtn.classList.add('btn-disabled');\n    } else {\n      prevBtn.classList.remove('btn-disabled');\n    }\n\n    if (position <= -(itemsCount - slidesToShow) * itemWidth) {\n      nextBtn.classList.add('btn-disabled');\n    } else {\n      nextBtn.classList.remove('btn-disabled');\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servisesOur);\n\n//# sourceURL=webpack://Diplom/./src/modules/servisesOur.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ef6257d5f8907acf320")
/******/ })();
/******/ 
/******/ }
);