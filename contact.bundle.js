/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const locations = [
  ["New York", "Address: New York Street 561, New York"],
  ["Boston", "Address: Boston Avenue 721, Boston"],
  ["Los Angeles", "Address: LA Corner 123, Los Angeles"],
  ["Houston", "Address: Houston we have a problem 851, Houston"],
  ["Paris", "Address: Rue de la Paris 1, Paris"],
  ["London", "Address: London Bridge 39161, London"],
  ["Rome", "Address: Via Garibaldi 9991234, Rome"],
  ["Milano", "Address: Via Lombardy, Milano"],
  ["Stockholm", "Address: Kunsgårdsgatvägen 2, Stockholm"],
]
const contactText = [
  ["Email us!", `If you visited us and your visit left you speechless and provided you with an unforgettable moment, we would
  love to hear it! Throw us an email to gelateriagenerica@notarealemail.com and we will make sure to get back to
  you within 24 hours.`],
  ["Visit us!", `Visit one of our many non-existent locations around the world. Below you will find a list of all the locations
  where we are located:`]
]

function initContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const h1 = document.createElement('h1');
  h1.innerHTML = "Ways to contact us";
  contact.appendChild(h1);
  contactText.forEach(text => {
    const [header, para] = text;
    const h3 = document.createElement('h3');
    h3.innerHTML = header;
    const p = document.createElement('p');
    p.innerHTML = para;
    contact.appendChild(h3);
    contact.appendChild(p)
  });
  const ul = document.createElement('ul');
  locations.forEach(location => {
    const [city, address] = location;
    const li = document.createElement('li');
    li.innerHTML = city;
    const p = document.createElement('p');
    p.innerHTML = address;
    li.appendChild(p);
    ul.appendChild(li);
  })
  contact.appendChild(ul);
  document.querySelector('#content').appendChild(contact)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initContact);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGxvY2F0aW9ucyA9IFtcbiAgW1wiTmV3IFlvcmtcIiwgXCJBZGRyZXNzOiBOZXcgWW9yayBTdHJlZXQgNTYxLCBOZXcgWW9ya1wiXSxcbiAgW1wiQm9zdG9uXCIsIFwiQWRkcmVzczogQm9zdG9uIEF2ZW51ZSA3MjEsIEJvc3RvblwiXSxcbiAgW1wiTG9zIEFuZ2VsZXNcIiwgXCJBZGRyZXNzOiBMQSBDb3JuZXIgMTIzLCBMb3MgQW5nZWxlc1wiXSxcbiAgW1wiSG91c3RvblwiLCBcIkFkZHJlc3M6IEhvdXN0b24gd2UgaGF2ZSBhIHByb2JsZW0gODUxLCBIb3VzdG9uXCJdLFxuICBbXCJQYXJpc1wiLCBcIkFkZHJlc3M6IFJ1ZSBkZSBsYSBQYXJpcyAxLCBQYXJpc1wiXSxcbiAgW1wiTG9uZG9uXCIsIFwiQWRkcmVzczogTG9uZG9uIEJyaWRnZSAzOTE2MSwgTG9uZG9uXCJdLFxuICBbXCJSb21lXCIsIFwiQWRkcmVzczogVmlhIEdhcmliYWxkaSA5OTkxMjM0LCBSb21lXCJdLFxuICBbXCJNaWxhbm9cIiwgXCJBZGRyZXNzOiBWaWEgTG9tYmFyZHksIE1pbGFub1wiXSxcbiAgW1wiU3RvY2tob2xtXCIsIFwiQWRkcmVzczogS3Vuc2fDpXJkc2dhdHbDpGdlbiAyLCBTdG9ja2hvbG1cIl0sXG5dXG5jb25zdCBjb250YWN0VGV4dCA9IFtcbiAgW1wiRW1haWwgdXMhXCIsIGBJZiB5b3UgdmlzaXRlZCB1cyBhbmQgeW91ciB2aXNpdCBsZWZ0IHlvdSBzcGVlY2hsZXNzIGFuZCBwcm92aWRlZCB5b3Ugd2l0aCBhbiB1bmZvcmdldHRhYmxlIG1vbWVudCwgd2Ugd291bGRcbiAgbG92ZSB0byBoZWFyIGl0ISBUaHJvdyB1cyBhbiBlbWFpbCB0byBnZWxhdGVyaWFnZW5lcmljYUBub3RhcmVhbGVtYWlsLmNvbSBhbmQgd2Ugd2lsbCBtYWtlIHN1cmUgdG8gZ2V0IGJhY2sgdG9cbiAgeW91IHdpdGhpbiAyNCBob3Vycy5gXSxcbiAgW1wiVmlzaXQgdXMhXCIsIGBWaXNpdCBvbmUgb2Ygb3VyIG1hbnkgbm9uLWV4aXN0ZW50IGxvY2F0aW9ucyBhcm91bmQgdGhlIHdvcmxkLiBCZWxvdyB5b3Ugd2lsbCBmaW5kIGEgbGlzdCBvZiBhbGwgdGhlIGxvY2F0aW9uc1xuICB3aGVyZSB3ZSBhcmUgbG9jYXRlZDpgXVxuXVxuXG5mdW5jdGlvbiBpbml0Q29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lckhUTUwgPSBcIldheXMgdG8gY29udGFjdCB1c1wiO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGgxKTtcbiAgY29udGFjdFRleHQuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBjb25zdCBbaGVhZGVyLCBwYXJhXSA9IHRleHQ7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLmlubmVySFRNTCA9IGhlYWRlcjtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gcGFyYTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGgzKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHApXG4gIH0pO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICBjb25zdCBbY2l0eSwgYWRkcmVzc10gPSBsb2NhdGlvbjtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gY2l0eTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYWRkcmVzcztcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQodWwpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRDb250YWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==