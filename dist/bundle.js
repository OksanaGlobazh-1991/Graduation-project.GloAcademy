(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var t,n,l,o,r,c,a,i,s,u,d,y;u=document.querySelector(".modal-callback"),d=document.querySelector(".modal-overlay"),y=document.querySelectorAll(".slide div.element"),document.addEventListener("click",(function(e){var t=e.target;t.closest(".button-services")&&(u.style.display="block",d.style.display="block"),t.closest(".callback-btn")&&(u.style.display="block",d.style.display="block")})),y.forEach((function(e){e.addEventListener("click",(function(){u.style.display="block",d.style.display="block"}))})),document.addEventListener("click",(function(e){var t=e.target;t.closest(".modal-close")&&(u.style.display="none",d.style.display="none"),t.closest(".modal-overlay")&&(u.style.display="none",d.style.display="none")})),document.querySelectorAll('a[href*="#"]').forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))})),c=document.querySelector(".accordeon"),a=c.querySelectorAll(".element"),i=c.querySelectorAll(".element-content"),s=c.querySelectorAll(".title"),c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("title")&&s.forEach((function(e,n){var l;e===t&&(l=n,a.forEach((function(e,t,n){l===t?n[t].classList.add("active"):n[t].classList.remove("active")})),i.forEach((function(e,t,n){n[t].style.display=l===t?"block":"none"})))}))})),o=document.querySelector(".up"),r=document.querySelector(".services-section").getBoundingClientRect().top,o.style.cssText="display: none",window.addEventListener("scroll",(function(){window.scrollY>r?o.style.display="block":o.style.display="none"})),o.addEventListener("click",(function(){window.scrollBy({top:-window.scrollY,behavior:"smooth"})})),function(){var t,n=document.querySelector("form"),l=document.createElement("div"),o=document.querySelectorAll('input[name="fio"]'),r=document.querySelectorAll('input[name="tel"]');l.style.cssText="font-size: 2rem; color: black";var c=0;n.addEventListener("submit",(function(o){o.preventDefault(),n.appendChild(l),l.textContent="Идет отправка";var r,a=new FormData(n);t={},a.forEach((function(e,n){t[n]=e})),(r=n,function(t){if(Array.isArray(t))return e(t)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var l=Object.prototype.toString.call(t).slice(8,-1);return"Object"===l&&t.constructor&&(l=t.constructor.name),"Map"===l||"Set"===l?Array.from(t):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?e(t,n):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){e.value=""})),c(t).then((function(e){if(200!==e.status)throw new Error("status network not 200");console.log(e),l.textContent="Отправлено"})).catch((function(e){l.textContent="Ошибка",console.error(e)}))})),c=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})},o.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-яё ]+/g,"")})),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^а-яё\ ]+/gi,""),e.value=e.value.trim(),e.value=e.value.replace(/\s+/g," "),e.value=e.value.charAt(0).toUpperCase()+e.value.slice(1)}))})),r.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^0-9+]+/g,"")})),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^0-9\+]+/gi,""),e.value=e.value.trim(),e.value=e.value.replace(/\s+/g," ")}))}))}(),t=document.querySelectorAll(".item"),n=document.querySelectorAll(".table"),l=0,setInterval((function(){var e,o;e=n,t[o=l].style.display="none",e[o].classList.remove("active"),++l>=t.length&&(l=0),function(e,t,n,l){e[n].style.display="block",t[n].classList.add("active")}(t,n,l)}),3e3),function(){var e=0,t=document.querySelector(".slider-track"),n=document.querySelector(".slide"),l=document.querySelectorAll(".slide"),o=l.length,r=document.querySelector(".prev"),c=document.querySelector(".next"),a=n.clientWidth/1,i=1*a;l.forEach((function(e){e.style.minWidth="".concat(a,"px")})),r.addEventListener("click",(function(){e+=i,s(),u()})),c.addEventListener("click",(function(){e-=i,s(),u()}));var s=function(){t.style.transform="translateX(".concat(e,"px)")},u=function(){0===e?r.classList.add("btn-disabled"):r.classList.remove("btn-disabled"),e<=-(o-1)*a?c.classList.add("btn-disabled"):c.classList.remove("btn-disabled")}}()})();