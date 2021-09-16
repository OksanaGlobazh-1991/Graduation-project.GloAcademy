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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeonParent = document.querySelector('.accordeon'),\n      element = accordeonParent.querySelectorAll('.element'),\n      elementContent = accordeonParent.querySelectorAll('.element-content'),\n      title = accordeonParent.querySelectorAll('.title');\n\n  var toggleAccordeon = function toggleAccordeon(index) {\n    for (var _index = 0; i < element.length; i++) {\n      if (_index === i) {\n        element[i].classList.add('active');\n      } else {\n        element[i].classList.remove('active');\n      }\n    }\n\n    for (var _i = 0; _i < elementContent.length; _i++) {\n      if (index === _i) {\n        elementContent[_i].style.display = 'block';\n      } else {\n        elementContent[_i].style.display = 'none';\n      }\n    }\n  };\n\n  accordeonParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      title.forEach(function (item, i) {\n        if (item === target) {\n          toggleAccordeon(i);\n        }\n      });\n    }\n  }); // const toggleAccordeon = (index) => {\n  //   for (let i = 0; i < element.length; i++) {\n  //     if (index === i) {\n  //       element[i].classList.add('active');\n  //     } else {\n  //       element[i].classList.remove('active');\n  //     }\n  //   }\n  //   for (let i = 0; i < elementContent.length; i++) {\n  //     if (index === i) {\n  //       elementContent[i].style.display = 'block';\n  //     } else {\n  //       elementContent[i].style.display = 'none';\n  //     }\n  //   }\n  // };\n  // accordeonParent.addEventListener('click', (event) => {\n  //   let target = event.target;\n  //   if (target.classList.contains('title')) {\n  //     title.forEach((item, i) => {\n  //       if (item === target) {\n  //         toggleAccordeon(i);\n  //       }\n  //     });\n  //   }\n  // })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b86d02e40e16c3068900")
/******/ })();
/******/ 
/******/ }
);