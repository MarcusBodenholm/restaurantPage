/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/biscottodellanonna.jpg":
/*!*******************************************!*\
  !*** ./src/images/biscottodellanonna.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ae308dede4b7ae8e698.jpg";

/***/ }),

/***/ "./src/images/cioccolatoallatte.jpeg":
/*!*******************************************!*\
  !*** ./src/images/cioccolatoallatte.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77146d8cc5efd45192e5.jpeg";

/***/ }),

/***/ "./src/images/croccantedellanonna.jpeg":
/*!*********************************************!*\
  !*** ./src/images/croccantedellanonna.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4156ad5decbf12e68bba.jpeg";

/***/ }),

/***/ "./src/images/fragola.jpeg":
/*!*********************************!*\
  !*** ./src/images/fragola.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fae70ce6dba4f75474f3.jpeg";

/***/ }),

/***/ "./src/images/futtodibosco.jpeg":
/*!**************************************!*\
  !*** ./src/images/futtodibosco.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b598ced8e674647f749.jpeg";

/***/ }),

/***/ "./src/images/pannacotta.jpeg":
/*!************************************!*\
  !*** ./src/images/pannacotta.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae4147343b1898b5c247.jpeg";

/***/ }),

/***/ "./src/images/pestodipistacchio.jpeg":
/*!*******************************************!*\
  !*** ./src/images/pestodipistacchio.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8acafba63d700c8fb2d7.jpeg";

/***/ }),

/***/ "./src/images/stracciatella.jpeg":
/*!***************************************!*\
  !*** ./src/images/stracciatella.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54102f5bb5d503181be2.jpeg";

/***/ }),

/***/ "./src/images/yogurtallampone.jpeg":
/*!*****************************************!*\
  !*** ./src/images/yogurtallampone.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ea6e46a8618c2c3b851.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_biscottodellanonna_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/biscottodellanonna.jpg */ "./src/images/biscottodellanonna.jpg");
/* harmony import */ var _images_cioccolatoallatte_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cioccolatoallatte.jpeg */ "./src/images/cioccolatoallatte.jpeg");
/* harmony import */ var _images_croccantedellanonna_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/croccantedellanonna.jpeg */ "./src/images/croccantedellanonna.jpeg");
/* harmony import */ var _images_fragola_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fragola.jpeg */ "./src/images/fragola.jpeg");
/* harmony import */ var _images_futtodibosco_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/futtodibosco.jpeg */ "./src/images/futtodibosco.jpeg");
/* harmony import */ var _images_pannacotta_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pannacotta.jpeg */ "./src/images/pannacotta.jpeg");
/* harmony import */ var _images_stracciatella_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/stracciatella.jpeg */ "./src/images/stracciatella.jpeg");
/* harmony import */ var _images_yogurtallampone_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/yogurtallampone.jpeg */ "./src/images/yogurtallampone.jpeg");
/* harmony import */ var _images_pestodipistacchio_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pestodipistacchio.jpeg */ "./src/images/pestodipistacchio.jpeg");










const gelato = [
  { name: "Biscotto della Nonna", src: _images_biscottodellanonna_jpg__WEBPACK_IMPORTED_MODULE_0__ },
  { name: "Cioccolato al Latte", src: _images_cioccolatoallatte_jpeg__WEBPACK_IMPORTED_MODULE_1__ },
  { name: "Croccante della Nonna", src: _images_croccantedellanonna_jpeg__WEBPACK_IMPORTED_MODULE_2__ },
  { name: "Fragola", src: _images_fragola_jpeg__WEBPACK_IMPORTED_MODULE_3__ },
  { name: "Frutto di Bosco", src: _images_futtodibosco_jpeg__WEBPACK_IMPORTED_MODULE_4__ },
  { name: "Panna Cotta", src: _images_pannacotta_jpeg__WEBPACK_IMPORTED_MODULE_5__ },
  { name: "Stracciatella", src: _images_stracciatella_jpeg__WEBPACK_IMPORTED_MODULE_6__ },
  { name: "Yogurt al Lampone", src: _images_yogurtallampone_jpeg__WEBPACK_IMPORTED_MODULE_7__ },
  { name: "Pesto di Pistacchio", src: _images_pestodipistacchio_jpeg__WEBPACK_IMPORTED_MODULE_8__ },]

function card(obj) {
  const div = document.createElement('div');
  div.classList.add('card');
  const img = document.createElement('img');
  img.src = obj.src;
  img.alt = obj.name;
  img.classList.add('cardimg');
  const p = document.createElement('p');
  p.innerHTML = obj.name;
  div.appendChild(img);
  div.appendChild(p);
  return div;
}

function initMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const h1 = document.createElement('h1');
  h1.innerHTML = "Gelato Flavors";
  menu.appendChild(h1);
  const para = document.createElement('p');
  para.innerHTML = `Below are but a few of the flavors you can choose from at Gelateria Generica! Remember that you can choose your own combination of these flavors to create your own favorite gelato. Our recommendation is to start with Le Due Nonne: Combine Biscotto della Nonna with Croccante della Nonna! You will not regret it.`;
  menu.appendChild(para);
  const grid = document.createElement('div');
  grid.classList.add('grid');
  gelato.forEach(x => {
    const gridCard = card(x);
    grid.appendChild(gridCard);
  })
  menu.appendChild(grid);
  document.querySelector('#content').appendChild(menu);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVEO0FBQ0U7QUFDQztBQUNkO0FBQ0k7QUFDRTtBQUNDO0FBQ087QUFDRDs7QUFFekQ7QUFDQSxJQUFJLG1DQUFtQywyREFBUSxFQUFFO0FBQ2pELElBQUksa0NBQWtDLDJEQUFVLEVBQUU7QUFDbEQsSUFBSSxvQ0FBb0MsNkRBQVMsRUFBRTtBQUNuRCxJQUFJLHNCQUFzQixpREFBTyxFQUFFO0FBQ25DLElBQUksOEJBQThCLHNEQUFNLEVBQUU7QUFDMUMsSUFBSSwwQkFBMEIsb0RBQVUsRUFBRTtBQUMxQyxJQUFJLDRCQUE0Qix1REFBUSxFQUFFO0FBQzFDLElBQUksZ0NBQWdDLHlEQUFhLEVBQUU7QUFDbkQsSUFBSSxrQ0FBa0MsMkRBQVUsRUFBRTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGJpc2NvdHRvIGZyb20gXCIuL2ltYWdlcy9iaXNjb3R0b2RlbGxhbm9ubmEuanBnXCI7XG5pbXBvcnQgY2lvY2NvbGF0byBmcm9tIFwiLi9pbWFnZXMvY2lvY2NvbGF0b2FsbGF0dGUuanBlZ1wiO1xuaW1wb3J0IGNyb2NjYW50ZSBmcm9tIFwiLi9pbWFnZXMvY3JvY2NhbnRlZGVsbGFub25uYS5qcGVnXCI7XG5pbXBvcnQgZnJhZ29sYSBmcm9tIFwiLi9pbWFnZXMvZnJhZ29sYS5qcGVnXCI7XG5pbXBvcnQgZnJ1dHRvIGZyb20gXCIuL2ltYWdlcy9mdXR0b2RpYm9zY28uanBlZ1wiO1xuaW1wb3J0IHBhbm5hY290dGEgZnJvbSBcIi4vaW1hZ2VzL3Bhbm5hY290dGEuanBlZ1wiO1xuaW1wb3J0IHN0cmFjY2lhIGZyb20gXCIuL2ltYWdlcy9zdHJhY2NpYXRlbGxhLmpwZWdcIjtcbmltcG9ydCB5b2d1cnRMYW1wb25lIGZyb20gXCIuL2ltYWdlcy95b2d1cnRhbGxhbXBvbmUuanBlZ1wiO1xuaW1wb3J0IHBpc3RhY2NoaW8gZnJvbSBcIi4vaW1hZ2VzL3Blc3RvZGlwaXN0YWNjaGlvLmpwZWdcIjtcblxuY29uc3QgZ2VsYXRvID0gW1xuICB7IG5hbWU6IFwiQmlzY290dG8gZGVsbGEgTm9ubmFcIiwgc3JjOiBiaXNjb3R0byB9LFxuICB7IG5hbWU6IFwiQ2lvY2NvbGF0byBhbCBMYXR0ZVwiLCBzcmM6IGNpb2Njb2xhdG8gfSxcbiAgeyBuYW1lOiBcIkNyb2NjYW50ZSBkZWxsYSBOb25uYVwiLCBzcmM6IGNyb2NjYW50ZSB9LFxuICB7IG5hbWU6IFwiRnJhZ29sYVwiLCBzcmM6IGZyYWdvbGEgfSxcbiAgeyBuYW1lOiBcIkZydXR0byBkaSBCb3Njb1wiLCBzcmM6IGZydXR0byB9LFxuICB7IG5hbWU6IFwiUGFubmEgQ290dGFcIiwgc3JjOiBwYW5uYWNvdHRhIH0sXG4gIHsgbmFtZTogXCJTdHJhY2NpYXRlbGxhXCIsIHNyYzogc3RyYWNjaWEgfSxcbiAgeyBuYW1lOiBcIllvZ3VydCBhbCBMYW1wb25lXCIsIHNyYzogeW9ndXJ0TGFtcG9uZSB9LFxuICB7IG5hbWU6IFwiUGVzdG8gZGkgUGlzdGFjY2hpb1wiLCBzcmM6IHBpc3RhY2NoaW8gfSxdXG5cbmZ1bmN0aW9uIGNhcmQob2JqKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IG9iai5zcmM7XG4gIGltZy5hbHQgPSBvYmoubmFtZTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmRpbWcnKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lckhUTUwgPSBvYmoubmFtZTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gaW5pdE1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJIVE1MID0gXCJHZWxhdG8gRmxhdm9yc1wiO1xuICBtZW51LmFwcGVuZENoaWxkKGgxKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS5pbm5lckhUTUwgPSBgQmVsb3cgYXJlIGJ1dCBhIGZldyBvZiB0aGUgZmxhdm9ycyB5b3UgY2FuIGNob29zZSBmcm9tIGF0IEdlbGF0ZXJpYSBHZW5lcmljYSEgUmVtZW1iZXIgdGhhdCB5b3UgY2FuIGNob29zZSB5b3VyIG93biBjb21iaW5hdGlvbiBvZiB0aGVzZSBmbGF2b3JzIHRvIGNyZWF0ZSB5b3VyIG93biBmYXZvcml0ZSBnZWxhdG8uIE91ciByZWNvbW1lbmRhdGlvbiBpcyB0byBzdGFydCB3aXRoIExlIER1ZSBOb25uZTogQ29tYmluZSBCaXNjb3R0byBkZWxsYSBOb25uYSB3aXRoIENyb2NjYW50ZSBkZWxsYSBOb25uYSEgWW91IHdpbGwgbm90IHJlZ3JldCBpdC5gO1xuICBtZW51LmFwcGVuZENoaWxkKHBhcmEpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICBnZWxhdG8uZm9yRWFjaCh4ID0+IHtcbiAgICBjb25zdCBncmlkQ2FyZCA9IGNhcmQoeCk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChncmlkQ2FyZCk7XG4gIH0pXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==