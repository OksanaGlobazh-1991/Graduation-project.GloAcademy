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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar accordeon = function accordeon() {\n  var accordeonParent = document.querySelector('.accordeon'),\n      element = accordeonParent.querySelectorAll('.element'),\n      elementContent = accordeonParent.querySelectorAll('.element-content'),\n      title = accordeonParent.querySelectorAll('.title');\n\n  var toggleAccordeon = function toggleAccordeon(index) {\n    element.forEach(function (item) {\n      if (item === index) {\n        element[index].classList.add('active');\n      } else {\n        element[index].classList.remove('active');\n      }\n    });\n\n    var _iterator = _createForOfIteratorHelper(elementContent),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _index = _step.value;\n\n        if (_index) {\n          elementContent[_index].style.display = 'block';\n        } else {\n          elementContent[_index].style.display = 'none';\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  accordeonParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      title.forEach(function (elem, i) {\n        if (elem === target) {\n          toggleAccordeon(i);\n        }\n      });\n    }\n  }); // const toggleAccordeon = (index) => {\n  //   for (let i = 0; i < element.length; i++) {\n  //     if (index === i) {\n  //       element[i].classList.add('active');\n  //     } else {\n  //       element[i].classList.remove('active');\n  //     }\n  //   }\n  //   for (let i = 0; i < elementContent.length; i++) {\n  //     if (index === i) {\n  //       elementContent[i].style.display = 'block';\n  //     } else {\n  //       elementContent[i].style.display = 'none';\n  //     }\n  //   }\n  // };\n  // accordeonParent.addEventListener('click', (event) => {\n  //   let target = event.target;\n  //   if (target.classList.contains('title')) {\n  //     title.forEach((item, i) => {\n  //       if (item === target) {\n  //         toggleAccordeon(i);\n  //       }\n  //     });\n  //   }\n  // })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f768439fd876392f5bf1")
/******/ })();
/******/ 
/******/ }
);