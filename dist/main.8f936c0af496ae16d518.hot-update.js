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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newAccordeon */ \"./src/modules/newAccordeon.js\");\n/* harmony import */ var _modules_newScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newScroll */ \"./src/modules/newScroll.js\");\n\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_newScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nsendForm();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalWindow = function modalWindow() {\n  var callbackBtn = document.querySelectorAll('.callback-btn'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close'),\n      buttonServices = document.querySelector('.button-services');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.button-services')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n\n    if (target.closest('.callback-btn')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.modal-close')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n\n    if (target.closest('.modal-overlay')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://Diplom/./src/modules/modalWindow.js?");

/***/ }),

/***/ "./src/modules/newAccordeon.js":
/*!*************************************!*\
  !*** ./src/modules/newAccordeon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar newAccordeon = function newAccordeon() {\n  var accordeonParent = document.querySelector('.accordeon'),\n      element = accordeonParent.querySelectorAll('.element'),\n      elementContent = accordeonParent.querySelectorAll('.element-content'),\n      title = accordeonParent.querySelectorAll('.title');\n\n  var toggleAccordeon = function toggleAccordeon(index) {\n    element.forEach(function (item, i, arr) {\n      if (index === i) {\n        arr[i].classList.add('active');\n      } else {\n        arr[i].classList.remove('active');\n      }\n    });\n    elementContent.forEach(function (item, i, arr) {\n      if (index === i) {\n        arr[i].style.display = 'block';\n      } else {\n        arr[i].style.display = 'none';\n      }\n    });\n  };\n\n  accordeonParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      title.forEach(function (elem, i) {\n        if (elem === target) {\n          toggleAccordeon(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newAccordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/newAccordeon.js?");

/***/ }),

/***/ "./src/modules/newScroll.js":
/*!**********************************!*\
  !*** ./src/modules/newScroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var scrollBtn = document.querySelector('.up'),\n      servicesSection = document.querySelector('.services-section');\n  var servicesSectionTop = servicesSection.getBoundingClientRect().top; //расстояние от верхнего края до блока\n\n  scrollBtn.style.cssText = 'display: none';\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > servicesSectionTop) {\n      scrollBtn.style.display = 'block';\n    } else {\n      scrollBtn.style.display = 'none';\n    }\n  });\n  scrollBtn.addEventListener('click', function () {\n    window.scrollBy({\n      top: -window.scrollY,\n      behavior: 'smooth'\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://Diplom/./src/modules/newScroll.js?");

/***/ }),

/***/ "./src/modules/servicePrices.js":
/*!**************************************!*\
  !*** ./src/modules/servicePrices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicePrices = function servicePrices() {\n  var menu = document.querySelectorAll('a[href*=\"#\"]');\n  menu.forEach(function (elem) {\n    elem.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockID = elem.getAttribute('href');\n      document.querySelector('' + blockID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicePrices);\n\n//# sourceURL=webpack://Diplom/./src/modules/servicePrices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("adffe082bcaa4c04cacd")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);