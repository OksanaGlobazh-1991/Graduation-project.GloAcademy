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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar newSlider = function newSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table');\n\n  var newElem = function newElem() {\n    var portfolioDots = document.querySelector('.portfolio-dots');\n    itemSlide.forEach(function (item, i) {\n      item = document.createElement('li');\n      item.className = 'dot';\n\n      if (i === 0) {\n        item = document.createElement('li');\n        item.className = 'dot dot-active';\n      }\n\n      portfolioDots.append(item);\n    });\n  };\n\n  newElem();\n  var dot = document.querySelectorAll('.dot');\n  var slideIndex = 0;\n\n  var prevSlide = function prevSlide(elem, elem2, index, strClass) {\n    elem[index].style.display = 'none';\n    elem2[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, elem2, index, strClass) {\n    elem[index].style.display = 'block';\n    elem2[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(itemSlide, table, slideIndex, 'active');\n    prevSlide(dot, slideIndex, 'dot-active');\n    slideIndex++;\n\n    if (slideIndex >= itemSlide.length) {\n      slideIndex = 0;\n    }\n\n    nextSlide(itemSlide, table, slideIndex, 'active');\n    nextSlide(dot, slideIndex, 'dot-active');\n  };\n\n  var startSlide = function startSlide(time) {\n    setInterval(autoPlaySlide, time);\n  };\n\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSlider);\n\n//# sourceURL=webpack://Diplom/./src/modules/newSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d5a81d2b9b2e971eb5c5")
/******/ })();
/******/ 
/******/ }
);