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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar newSlider = function newSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table'),\n      slider = document.querySelector('.top-slider');\n  var slideIndex = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, elem2, index, strClass) {\n    elem[index].style.display = 'none';\n    elem2[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, elem2, index, strClass) {\n    elem[index].style.display = 'block';\n    elem2[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(itemSlide, table, slideIndex, 'active');\n    slideIndex++;\n\n    if (slideIndex >= itemSlide.length) {\n      slideIndex = 0;\n    }\n\n    nextSlide(itemSlide, table, slideIndex, 'active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('mouseover', function () {\n    stopSlide();\n  });\n  slider.addEventListener('mouseout', function () {\n    startSlide();\n  });\n  startSlide(3000); // const autoPlaySlide = () => {\n  //   setInterval(showSlides(slideIndex), 3000);\n  // };\n  //   function showSlides(n) {\n  //   if (n > itemSlide.length) {\n  //     slideIndex = 1;\n  //   }\n  //   if (n < 1) {\n  //     slideIndex = itemSlide.length;\n  //   }\n  // }\n  // itemSlide.forEach(item => item.style.display = 'none');\n  // itemSlide[slideIndex - 1].style.display = 'block';\n  // autoPlaySlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSlider);\n\n//# sourceURL=webpack://Diplom/./src/modules/newSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d46175e7516f05a3fa70")
/******/ })();
/******/ 
/******/ }
);