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

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Ошибка',\n      loadMessage = 'Идет отправка',\n      successMessage = 'Отправлено';\n  var form = document.querySelector('form');\n  var statusMessage = document.createElement('div');\n  var formName = document.querySelectorAll('input[name=\"fio\"]');\n  formPhone = document.querySelectorAll('input[name=\"tel\"]');\n  statusMessage.style.cssText = 'font-size: 2rem; color: black';\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^0-9\\+]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n  var body;\n  var postData = 0;\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n\n    _toConsumableArray(form).forEach(function (input) {\n      input.value = '';\n    });\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      console.log(response);\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include'\n    });\n  };\n\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яё ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^а-яё\\ ]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://Diplom/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f91d345af6efdcb3c3a")
/******/ })();
/******/ 
/******/ }
);