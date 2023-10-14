/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/pageup.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector);
	

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1850) {
			upElem.classList.add('animate__animated', 'animate__fadeInUp');
			upElem.classList.remove('animate__fadeOut');
		} else {
			upElem.classList.add('animate__fadeOut');
			upElem.classList.remove('animate__fadeIn');
		}
	});

	const elem = document.documentElement,
		body = document.body;

	const calcScroll = () => {
		upElem.addEventListener('click', function(event) {
			let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

			if (this.hash !== '') {
				event.preventDefault();
				let hashElement = document.querySelector(this.hash),
					hashElementTop = 0;

				while (hashElement.offsetParent) {
					hashElementTop += hashElement.offsetTop;
					hashElement = hashElement.offsetParent;
				}

				hashElementTop = Math.round(hashElementTop);
				smoothScroll(scrollTop, hashElementTop, this.hash); 
			}
		});
	};

	const smoothScroll = (from, to, hash) => {
		let timeInterval = 1,
			prevScrollTop,
			speed;

		if (to > from) {
			speed = 30;
		} else {
			speed = -30;
		}

		let move = setInterval(function() {
			let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

			if (prevScrollTop === scrollTop ||
				(to > from && scrollTop >= to ||
					to < from && scrollTop <= to)) {
						clearInterval(move);
			} else {
				body.scrollTop += speed;
				elem.scrollTop += speed;
				prevScrollTop = scrollTop;
			}
		}, timeInterval);
	};

	calcScroll();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pageup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageup */ "./src/js/modules/pageup.js");


window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_pageup__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map