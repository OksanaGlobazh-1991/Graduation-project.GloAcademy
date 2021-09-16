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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\"\"(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"js\\nconst accordeon = () => {\\n    const accordeonParent = document.querySelector('.accordeon'),\\n          element = document.querySelectorAll('.element'),\\n          elementContent = document.querySelectorAll('.element-content'), //\\u0442\\u0435\\u043A\\u0441\\u0442\\n          title = document.querySelectorAll('.title'); //\\u0437\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A\\n\\n          element.forEach((item) => {\\n            item.addEventListener('click', (event) => {\\n              element.forEach((item) => {\\n                item.classList.remove('active');\\n                  elementContent.forEach((elem) => {\\n                    elem.style.display = 'none';\\n                  })\\n              })\\n              event.target.closest('.element').classList.add('active');\\n                elementContent.forEach((elem) => {\\n                  elem.style.display = 'block';\\n\\n                })\\n            })\\n          })   \\n          \\n          \\n          \\n          \\n};\\n\"])))(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6654e4dfd03944f0e109")
/******/ })();
/******/ 
/******/ }
);