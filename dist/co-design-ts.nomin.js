(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Subscriptions": () => (/* reexport */ Subscriptions)
});

;// CONCATENATED MODULE: ./src/Subscription.ts
var Subscriptions = (function () {
    function Subscriptions() {
        this.arrayConfig = [];
    }
    Subscriptions.prototype.on = function (name, foo) {
        name = name.replace(/\[\s]+/g, '');
        this.arrayConfig[name] = this.arrayConfig[name] || [];
        this.arrayConfig[name].push(foo);
        return this;
    };
    Subscriptions.prototype.trigger = function (name, args) {
        var fallback = this.arrayConfig[name] || [];
        for (var i = 0, fb; (fb = fallback[i]); i++) {
            if (!fb['notice'] && !fb['loading']) {
                fb['loading'] = true;
                fb['notice'] = true;
                try {
                    fb.apply(this, args);
                    fb['notice'] = false;
                    fb['loading'] = false;
                }
                catch (err) {
                    if (err)
                        fb['notice'] = true;
                }
            }
        }
        return this;
    };
    return Subscriptions;
}());


;// CONCATENATED MODULE: ./src/co-design-ts.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});