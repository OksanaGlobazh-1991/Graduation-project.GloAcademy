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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicePrices */ \"./src/modules/servicePrices.js\");\n/* harmony import */ var _modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newAccordeon */ \"./src/modules/newAccordeon.js\");\n/* harmony import */ var _modules_newScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newScroll */ \"./src/modules/newScroll.js\");\n/* harmony import */ var _modules_newSendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/newSendForm */ \"./src/modules/newSendForm.js\");\n/* harmony import */ var _modules_carusel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carusel */ \"./src/modules/carusel.js\");\n\n\n\n\n\n\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_servicePrices__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_newAccordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_newScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_newSendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_carusel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_carusel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://Diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/carusel.js":
/*!********************************!*\
  !*** ./src/modules/carusel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carusel = function carusel() {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carusel);\n\n//# sourceURL=webpack://Diplom/./src/modules/carusel.js?");

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

/***/ "./src/modules/newSendForm.js":
/*!************************************!*\
  !*** ./src/modules/newSendForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar newSendForm = function newSendForm() {\n  var errorMessage = 'Ошибка',\n      loadMessage = 'Идет отправка',\n      successMessage = 'Отправлено';\n  var form = document.querySelector('form');\n  var statusMessage = document.createElement('div');\n  var formName = document.querySelectorAll('input[name=\"fio\"]'),\n      formPhone = document.querySelectorAll('input[name=\"tel\"]');\n  statusMessage.style.cssText = 'font-size: 2rem; color: black';\n  var body;\n  var postData = 0;\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n\n    _toConsumableArray(form).forEach(function (input) {\n      input.value = '';\n    });\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      console.log(response);\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include'\n    });\n  };\n\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яё ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^а-яё\\ ]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);\n    });\n  });\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^0-9\\+]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSendForm);\n\n//# sourceURL=webpack://Diplom/./src/modules/newSendForm.js?");

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
/******/ 	__webpack_require__.h = () => ("1bc1e9c72d2ed1b1ad8c")
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