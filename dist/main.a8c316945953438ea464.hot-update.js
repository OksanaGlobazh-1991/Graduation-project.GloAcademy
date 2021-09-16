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

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeonParent = document.querySelector('.accordeon'),\n      element = document.querySelectorAll('.element'),\n      elementContent = document.querySelectorAll('.element-content'),\n      //текст\n  title = document.querySelectorAll('.title'); //заголовок\n\n  var toggleAccordeon = function toggleAccordeon(i) {\n    for (var _i = 0; _i < element.length; _i++) {\n      if (item === _i) {\n        element[_i].classList.add('active');\n      } else {\n        element[_i].classList.remove('active');\n      }\n    }\n\n    for (var _i2 = 0; _i2 < elementContent.length; _i2++) {\n      if (item === _i2) {\n        elementContent[_i2].style.display = 'block';\n      } else {\n        elementContent[_i2].style.display = 'none';\n      }\n    }\n  };\n\n  accordeonParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      title.forEach(function (item, i) {\n        if (item === target) {\n          toggleAccordeon(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d5e13c9f0e361e0fd41")
/******/ })();
/******/ 
/******/ }
);