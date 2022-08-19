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
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialize() {
  const header = document.createElement('header')
  const nav = list();
  header.appendChild(nav)
  const div = document.createElement('div');
  div.id = "content";
  const body = document.querySelector('body');
  const footerEl = footer();
  body.appendChild(header);
  body.appendChild(div);
  body.appendChild(footerEl);
}

function list() {
  const nav = document.createElement('nav');
  function createLi(id, text) {
    const li = document.createElement('li');
    li.id = id;
    li.innerHTML = text;
    return li;
  }
  const ul = document.createElement('ul');
  ul.classList.add('tabs')
  const home = createLi("initHome", "Home");
  const menu = createLi("initMenu", "Menu");
  const contact = createLi("initContact", "Contact");
  home.classList.add('current')
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  return nav;
}

function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const a = document.createElement('a');
  a.href = "https://www.gelateriaromana.com/en/";
  a.innerHTML = "Click here to check out Gelateria La Romana, one of the best gelaterias in Italy!";
  footer.appendChild(a);
  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgY29uc3QgbmF2ID0gbGlzdCgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gXCJjb250ZW50XCI7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGZvb3RlckVsID0gZm9vdGVyKCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3RlckVsKTtcbn1cblxuZnVuY3Rpb24gbGlzdCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUxpKGlkLCB0ZXh0KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlkID0gaWQ7XG4gICAgbGkuaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gbGk7XG4gIH1cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc0xpc3QuYWRkKCd0YWJzJylcbiAgY29uc3QgaG9tZSA9IGNyZWF0ZUxpKFwiaW5pdEhvbWVcIiwgXCJIb21lXCIpO1xuICBjb25zdCBtZW51ID0gY3JlYXRlTGkoXCJpbml0TWVudVwiLCBcIk1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVMaShcImluaXRDb250YWN0XCIsIFwiQ29udGFjdFwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBcImh0dHBzOi8vd3d3LmdlbGF0ZXJpYXJvbWFuYS5jb20vZW4vXCI7XG4gIGEuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlIHRvIGNoZWNrIG91dCBHZWxhdGVyaWEgTGEgUm9tYW5hLCBvbmUgb2YgdGhlIGJlc3QgZ2VsYXRlcmlhcyBpbiBJdGFseSFcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==