/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_currency_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/currency-api.js */ \"./src/js/currency-api.js\");\n\n\n\n\n// Business Logic_______________\n\nfunction getCurrency(currency, usd){\n  console.log(getCurrency);\n  let promise = _js_currency_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrency(currency, usd);\n  promise.then(function(CurrencyDataArray) {\n    printElements(CurrencyDataArray);\n  }, function(error) {\n    printError(error);\n    console.log(getCurrency);\n  });\n\n  }\n\n  \n  // UI Logic_______________\n\n\nfunction printElements(response, currency, usd){\n  let exchangeAmount = response.conversion_rates;\n  document.querySelector(\"#output\").innerHTML = `The exchange in ${usd} to ${currency} is worth ${exchangeAmount} `\n} \n\n\nfunction printError(error){\n  let output = document.getElementById(\"output\")\n  output.innerHTML = null;\n  if ( error.toString().includes('404')) {\n    output.innerHTML = printError()\n  } else {\n    output.innerHTML = printError();\n  }\n\n\nfunction handleSubit(event) {\n  event.preventDefault();\n  output.innerHTML =null;\n  const currency = document.getElementById(\"currency-type\").value;\n  const usd = parseInt.getElementById(\"usd-input\");\n  \n  getCurrency(currency, usd);\n}\n\nwindow.addEventListener(\"load\", function() {\nthis.document.querySelector(\"form\").addEventListener(\"submit\", handleSubit);\n\n});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQW1EOzs7O0FBSW5EOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQWU7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxtRUFBbUUsSUFBSSxNQUFNLFNBQVMsWUFBWSxlQUFlO0FBQ2pILEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEN1cnJlbmN5U2VydmljZSBmcm9tICcuL2pzL2N1cnJlbmN5LWFwaS5qcyc7XG5cblxuXG4vLyBCdXNpbmVzcyBMb2dpY19fX19fX19fX19fX19fX1xuXG5mdW5jdGlvbiBnZXRDdXJyZW5jeShjdXJyZW5jeSwgdXNkKXtcbiAgY29uc29sZS5sb2coZ2V0Q3VycmVuY3kpO1xuICBsZXQgcHJvbWlzZSA9IEN1cnJlbmN5U2VydmljZS5nZXRDdXJyZW5jeShjdXJyZW5jeSwgdXNkKTtcbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKEN1cnJlbmN5RGF0YUFycmF5KSB7XG4gICAgcHJpbnRFbGVtZW50cyhDdXJyZW5jeURhdGFBcnJheSk7XG4gIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcHJpbnRFcnJvcihlcnJvcik7XG4gICAgY29uc29sZS5sb2coZ2V0Q3VycmVuY3kpO1xuICB9KTtcblxuICB9XG5cbiAgXG4gIC8vIFVJIExvZ2ljX19fX19fX19fX19fX19fXG5cblxuZnVuY3Rpb24gcHJpbnRFbGVtZW50cyhyZXNwb25zZSwgY3VycmVuY3ksIHVzZCl7XG4gIGxldCBleGNoYW5nZUFtb3VudCA9IHJlc3BvbnNlLmNvbnZlcnNpb25fcmF0ZXM7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpLmlubmVySFRNTCA9IGBUaGUgZXhjaGFuZ2UgaW4gJHt1c2R9IHRvICR7Y3VycmVuY3l9IGlzIHdvcnRoICR7ZXhjaGFuZ2VBbW91bnR9IGBcbn0gXG5cblxuZnVuY3Rpb24gcHJpbnRFcnJvcihlcnJvcil7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICBvdXRwdXQuaW5uZXJIVE1MID0gbnVsbDtcbiAgaWYgKCBlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCc0MDQnKSkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBwcmludEVycm9yKClcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gcHJpbnRFcnJvcigpO1xuICB9XG5cblxuZnVuY3Rpb24gaGFuZGxlU3ViaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgb3V0cHV0LmlubmVySFRNTCA9bnVsbDtcbiAgY29uc3QgY3VycmVuY3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbmN5LXR5cGVcIikudmFsdWU7XG4gIGNvbnN0IHVzZCA9IHBhcnNlSW50LmdldEVsZW1lbnRCeUlkKFwidXNkLWlucHV0XCIpO1xuICBcbiAgZ2V0Q3VycmVuY3koY3VycmVuY3ksIHVzZCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbnRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJpdCk7XG5cbn0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/currency-api.js":
/*!********************************!*\
  !*** ./src/js/currency-api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CurrencyService; });\nclass CurrencyService {  \n  static getCurrency(currency, usd) {\n    return new Promise(function(resolve, reject) {\n      let request = XMLHttpRequest();\n      const url = `https://v6.exchangerate-api.com/v6/${\"4c65401b2928655b81d991c8\"}/pair/${currency}/${usd}`\n      request.addEventListener(\"loadend\", function() {\n        console.log('process.env.API_KEY');\n         const response = JSON.parse(this.responseText);\n        console.log(\"4c65401b2928655b81d991c8\");\n        if (this.status === 200){\n          resolve([response, currency, usd]);\n        } else {\n          reject([this, response, currency, usd]);\n          \n        }\n      });\n      request.open(\"GET\", url, true);\n      request.sent();\n      });\n    }\n  }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VycmVuY3ktYXBpLmpzP2RkNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLHVCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDBCQUFtQixDQUFDLFFBQVEsU0FBUyxHQUFHLElBQUk7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUFtQjtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsImZpbGUiOiIuL3NyYy9qcy9jdXJyZW5jeS1hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeVNlcnZpY2UgeyAgXG4gIHN0YXRpYyBnZXRDdXJyZW5jeShjdXJyZW5jeSwgdXNkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdjYuZXhjaGFuZ2VyYXRlLWFwaS5jb20vdjYvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9wYWlyLyR7Y3VycmVuY3l9LyR7dXNkfWBcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzLmVudi5BUElfS0VZJyk7XG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BUElfS0VZKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApe1xuICAgICAgICAgIHJlc29sdmUoW3Jlc3BvbnNlLCBjdXJyZW5jeSwgdXNkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KFt0aGlzLCByZXNwb25zZSwgY3VycmVuY3ksIHVzZF0pO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5zZW50KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/currency-api.js\n");

/***/ })

/******/ });