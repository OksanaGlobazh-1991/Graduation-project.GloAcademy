(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,l,c;(function(){document.querySelectorAll(".callback-btn");var e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelector(".modal-close"),document.querySelector(".button-services"),document.addEventListener("click",(function(n){var o=n.target;o.closest(".button-services")&&(e.style.display="block",t.style.display="block"),o.closest(".callback-btn")&&(e.style.display="block",t.style.display="block")})),document.addEventListener("click",(function(n){var o=n.target;o.closest(".modal-close")&&(e.style.display="none",t.style.display="none"),o.closest(".modal-overlay")&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll('a[href*="#"]').forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))})),o=document.querySelector(".accordeon"),r=o.querySelectorAll(".element"),l=o.querySelectorAll(".element-content"),c=o.querySelectorAll(".title"),o.addEventListener("click",(function(e){var t=e.target;t.classList.contains("title")&&c.forEach((function(e,n){var o;e===t&&(o=n,r.forEach((function(e,t,n){o===t?n[t].classList.add("active"):n[t].classList.remove("active")})),l.forEach((function(e,t,n){n[t].style.display=o===t?"block":"none"})))}))})),t=document.querySelector(".up"),n=document.querySelector(".services-section").getBoundingClientRect().top,t.style.cssText="display: none",window.addEventListener("scroll",(function(){window.scrollY>n?t.style.display="block":t.style.display="none"})),t.addEventListener("click",(function(){window.scrollBy({top:-window.scrollY,behavior:"smooth"})})),function(){var t,n=document.querySelector("form"),o=document.createElement("div"),r=document.querySelectorAll('input[name="fio"]'),l=document.querySelectorAll('input[name="tel"]');o.style.cssText="font-size: 2rem; color: black";var c=0;n.addEventListener("submit",(function(r){r.preventDefault(),n.appendChild(o),o.textContent="Идет отправка";var l,a=new FormData(n);t={},a.forEach((function(e,n){t[n]=e})),(l=n,function(t){if(Array.isArray(t))return e(t)}(l)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){e.value=""})),c(t).then((function(e){if(200!==e.status)throw new Error("status network not 200");console.log(e),o.textContent="Отправлено"})).catch((function(e){o.textContent="Ошибка",console.error(e)}))})),c=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})},r.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-яё ]+/g,"")})),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^а-яё\ ]+/gi,""),e.value=e.value.trim(),e.value=e.value.replace(/\s+/g," "),e.value=e.value.charAt(0).toUpperCase()+e.value.slice(1)}))})),l.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^0-9+]+/g,"")})),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^0-9\+]+/gi,""),e.value=e.value.trim(),e.value=e.value.replace(/\s+/g," ")}))}))}()})();