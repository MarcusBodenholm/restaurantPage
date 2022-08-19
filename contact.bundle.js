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
  const p = document.createElement('p');
  p.innerHTML = `Credit for the images on this simple page goes to my favorite gelateria in Italy, Gelateria La Romana. Please check them out, link in the footer below, and visit them if you ever find yourself near one of their locations!`
  p.classList.add('credit');
  contact.appendChild(ul);
  contact.appendChild(p)
  document.querySelector('#content').appendChild(contact)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initContact);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbG9jYXRpb25zID0gW1xuICBbXCJOZXcgWW9ya1wiLCBcIkFkZHJlc3M6IE5ldyBZb3JrIFN0cmVldCA1NjEsIE5ldyBZb3JrXCJdLFxuICBbXCJCb3N0b25cIiwgXCJBZGRyZXNzOiBCb3N0b24gQXZlbnVlIDcyMSwgQm9zdG9uXCJdLFxuICBbXCJMb3MgQW5nZWxlc1wiLCBcIkFkZHJlc3M6IExBIENvcm5lciAxMjMsIExvcyBBbmdlbGVzXCJdLFxuICBbXCJIb3VzdG9uXCIsIFwiQWRkcmVzczogSG91c3RvbiB3ZSBoYXZlIGEgcHJvYmxlbSA4NTEsIEhvdXN0b25cIl0sXG4gIFtcIlBhcmlzXCIsIFwiQWRkcmVzczogUnVlIGRlIGxhIFBhcmlzIDEsIFBhcmlzXCJdLFxuICBbXCJMb25kb25cIiwgXCJBZGRyZXNzOiBMb25kb24gQnJpZGdlIDM5MTYxLCBMb25kb25cIl0sXG4gIFtcIlJvbWVcIiwgXCJBZGRyZXNzOiBWaWEgR2FyaWJhbGRpIDk5OTEyMzQsIFJvbWVcIl0sXG4gIFtcIk1pbGFub1wiLCBcIkFkZHJlc3M6IFZpYSBMb21iYXJkeSwgTWlsYW5vXCJdLFxuICBbXCJTdG9ja2hvbG1cIiwgXCJBZGRyZXNzOiBLdW5zZ8OlcmRzZ2F0dsOkZ2VuIDIsIFN0b2NraG9sbVwiXSxcbl1cbmNvbnN0IGNvbnRhY3RUZXh0ID0gW1xuICBbXCJFbWFpbCB1cyFcIiwgYElmIHlvdSB2aXNpdGVkIHVzIGFuZCB5b3VyIHZpc2l0IGxlZnQgeW91IHNwZWVjaGxlc3MgYW5kIHByb3ZpZGVkIHlvdSB3aXRoIGFuIHVuZm9yZ2V0dGFibGUgbW9tZW50LCB3ZSB3b3VsZFxuICBsb3ZlIHRvIGhlYXIgaXQhIFRocm93IHVzIGFuIGVtYWlsIHRvIGdlbGF0ZXJpYWdlbmVyaWNhQG5vdGFyZWFsZW1haWwuY29tIGFuZCB3ZSB3aWxsIG1ha2Ugc3VyZSB0byBnZXQgYmFjayB0b1xuICB5b3Ugd2l0aGluIDI0IGhvdXJzLmBdLFxuICBbXCJWaXNpdCB1cyFcIiwgYFZpc2l0IG9uZSBvZiBvdXIgbWFueSBub24tZXhpc3RlbnQgbG9jYXRpb25zIGFyb3VuZCB0aGUgd29ybGQuIEJlbG93IHlvdSB3aWxsIGZpbmQgYSBsaXN0IG9mIGFsbCB0aGUgbG9jYXRpb25zXG4gIHdoZXJlIHdlIGFyZSBsb2NhdGVkOmBdXG5dXG5cbmZ1bmN0aW9uIGluaXRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVySFRNTCA9IFwiV2F5cyB0byBjb250YWN0IHVzXCI7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaDEpO1xuICBjb250YWN0VGV4dC5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGNvbnN0IFtoZWFkZXIsIHBhcmFdID0gdGV4dDtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMuaW5uZXJIVE1MID0gaGVhZGVyO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBwYXJhO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocClcbiAgfSk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbG9jYXRpb25zLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgIGNvbnN0IFtjaXR5LCBhZGRyZXNzXSA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBjaXR5O1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBhZGRyZXNzO1xuICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSlcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lckhUTUwgPSBgQ3JlZGl0IGZvciB0aGUgaW1hZ2VzIG9uIHRoaXMgc2ltcGxlIHBhZ2UgZ29lcyB0byBteSBmYXZvcml0ZSBnZWxhdGVyaWEgaW4gSXRhbHksIEdlbGF0ZXJpYSBMYSBSb21hbmEuIFBsZWFzZSBjaGVjayB0aGVtIG91dCwgbGluayBpbiB0aGUgZm9vdGVyIGJlbG93LCBhbmQgdmlzaXQgdGhlbSBpZiB5b3UgZXZlciBmaW5kIHlvdXJzZWxmIG5lYXIgb25lIG9mIHRoZWlyIGxvY2F0aW9ucyFgXG4gIHAuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQodWwpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKHApXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFjdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENvbnRhY3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9