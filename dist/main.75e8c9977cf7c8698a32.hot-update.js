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

/***/ "./src/modules/newSendForm.js":
/*!************************************!*\
  !*** ./src/modules/newSendForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar newSendForm = function newSendForm() {\n  var errorMessage = 'Ошибка',\n      loadMessage = 'Идет отправка',\n      successMessage = 'Отправлено';\n  var form = document.querySelector('form');\n  var statusMessage = document.createElement('div');\n  var formName = document.querySelectorAll('input[name=\"fio\"]'),\n      formPhone = document.querySelectorAll('input[name=\"tel\"]');\n  statusMessage.style.cssText = 'font-size: 2rem; color: black';\n  var body;\n  var postData = 0;\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    }); //   [...form].forEach(input => {\n    //       input.value = '';\n    //   });\n\n    formName.value = '';\n    formPhone;\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      console.log(response);\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include'\n    });\n  };\n\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яё ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^а-яё\\ ]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);\n    });\n  });\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^0-9\\+]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newSendForm);\n\n//# sourceURL=webpack://Diplom/./src/modules/newSendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56ef7b2af43e068084fc")
/******/ })();
/******/ 
/******/ }
);