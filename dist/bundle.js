/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n // const uuid = require(\"uuid\");\n// import v4 from \"uuid/v4\";\n\nconsole.log(\"AnnotatorJs Loaded! ✌🏻\");\nvar uniqueClassNameGen = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n{// const allDiv = document.querySelectorAll(\"div\");\n  // // console.log(allDiv);\n  // let tempZIndex = 0;\n  // for (let i = 0; i < allDiv.length; i++) {\n  // allDiv[i].onmouseenter = function (event) {\n  // event.stopPropagation();\n  // this.style.border = \"1px solid red\";\n  // if (\n  //     allDiv[i].style.position === null ||\n  //     allDiv[i].style.position === \"\" ||\n  //     allDiv[i].style.position === \"static\"\n  // ) {\n  //     allDiv[i].style.position = \"relative\";\n  // }\n  // tempZIndex = Math.max(tempZIndex + 1, parseInt(allDiv[i].style.zIndex + 1));\n  // tempZIndex = Math.max(\n  //     tempZIndex,\n  //     parseInt(allDiv[i].parentElement.style.zIndex + 1)\n  // );\n  // var annotateJsDiv = document.createElement(\"div\");\n  // annotateJsDiv.className = \"annotateJsDiv\";\n  // annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;\n  // boxSizing: border-box`;\n  // //     {\n  // //         // annotateJsDiv.style = {\n  // //         //     ...annotateJsDiv.style,\n  // //         //     position: \"absolute\",\n  // //         //     top: \"0\",\n  // //         //     left: \"0\",\n  // //         //     width: \"100%\",\n  // //         //     height: \"100%\",\n  // //         //     background-color: rgba(0, 0, 0, 0.5);\n  // //         //     zIndex: \"1\"\n  // //         // };\n  // //     }\n  // //     allDiv[i].appendChild(annotateJsDiv);\n  // //     {\n  // //         // annotateJsDiv.onmouseleave = function (event) {\n  // //         //     // event.stopPropagation();\n  // //         //     this.parentElement.removeChild(this);\n  // //         //     this.parentElement.style.border = \"none\";\n  // //         // }\n  // //         // };\n  // //         // allDiv[i].onmouseout = function () {\n  // //         //     this.style.border = \"\";\n  // //         // //     // this.removeChild(this.lastChild);\n  // //         // };\n  // //     }\n  // }\n  // const allCustomAnnotationJsDivs = document.querySelectorAll(\".annotateJsDiv\");\n  // for (let i = 0; i < allDiv.length; i++) {\n  //     if (\n  //         allDiv[i].style.position === null ||\n  //         allDiv[i].style.position === \"\" ||\n  //         allDiv[i].style.position === \"static\"\n  //     ) {\n  //         allDiv[i].style.position = \"relative\";\n  //     }\n  //     var annotateJsDiv = document.createElement(\"div\");\n  //     annotateJsDiv.className = \"annotateJsDiv\";\n  //     annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;\n  //     boxSizing: border-box; background-color: aqua; box-sizeing: border-box; border: 1px solid blue; z-index: ${\n  //         allDiv[i].style.zIndex + 1\n  //     }`;\n  //     allDiv[i].onmouseenter = function (event) {\n  //         event.stopPropagation();\n  //         this.appendChild(annotateJsDiv);\n  //         // this.style.backgroundColor = \"aqua\";\n  //         // this.style.boxSizing = \"border-box\";\n  //         // this.style.border = \"1px solid blue\";\n  //     };\n  //     annotateJsDiv.onmouseleave = function (event) {\n  //         event.stopPropagation();\n  //         // this.style.backgroundColor = \"\";\n  //         // this.style.border = \"\";\n  //         allDiv[i].removeChild(this.lastChild);\n  //     };\n  // }\n  // //Text Elements\n  // const allTextElements = document.querySelectorAll(\n  //     \"h1, h2, h3, h4, h5, h6, p, span, li, a, button, input, textarea\"\n  // );\n  // for (let i = 0; i < allTextElements.length; i++) {\n  //     // console.log(allTextElements[i]);\n  //     tempZIndex = Math.max(\n  //         tempZIndex + 1,\n  //         parseInt(allTextElements[i].style.zIndex + 1)\n  //     );\n  //     if (\n  //         allTextElements[i].style.position === null ||\n  //         allTextElements[i].style.position === \"\" ||\n  //         allTextElements[i].style.position === \"static\"\n  //     ) {\n  //         allTextElements[i].style.position = \"relative\";\n  //     }\n  //     allTextElements[i].style.zIndex = tempZIndex;\n  //     allTextElements[i].onmouseenter = function (event) {\n  //         event.stopPropagation();\n  //         allTextElements[i].style.backgroundColor = \"#A6FFFF\";\n  //         allTextElements[i].style.boxSizing = \"border-box\";\n  //         allTextElements[i].style.border = \"1px solid blue\";\n  //     };\n  //     allTextElements[i].onmouseleave = function (event) {\n  //         event.stopPropagation();\n  //         allTextElements[i].style.backgroundColor = \"\";\n  //         allTextElements[i].style.border = \"\";\n  //     };\n  // }\n  // window.onload = function () {\n  // }\n  // let testDiv = document.querySelector(\".mainSection5\");\n  // let testVec = [testDiv];\n  // let currHighlightedDiv;\n  // let testDivClone = testDiv.cloneNode(true);\n  // console.log(testDivClone);\n  // testDivClone.style.position = \"absolute\";\n  // testDivClone.style.top = \"0\";\n  // testDivClone.style.left = \"0\";\n  // testDivClone.style.width = \"100%\";\n  // testDivClone.style.height = \"100%\";\n  // testDivClone.style.backgroundColor = \"aqua\";\n  // testDivClone.style.zIndex = \"9999999\";\n  // testDiv.appendChild(testDivClone);\n  // testDiv.parentElement.insertBefore(testDivClone, testDiv.nextSibling);\n  // while (testVec.length > 0) {\n  // let currDiv = testVec[0];\n  // testVec.shift();\n  // if (\n  //     window.getComputedStyle(currDiv).position === null ||\n  //     window.getComputedStyle(currDiv).position === \"\" ||\n  //     window.getComputedStyle(currDiv).position === \"static\"\n  // ) {\n  //     // console.log(currDiv.className, currDiv.style.position);\n  //     currDiv.style.position = \"relative\";\n  // }\n  // let maxZIndex = 0;\n  // for (let i = 0; i < currDiv.children.length; i++) {\n  //     if (currDiv.children[i].tagName === \"DIV\") {\n  //         // currDiv.children[i].style.border = \"1px solid red\";\n  //         testVec.push(currDiv.children[i]);\n  //     }\n  //     if (currDiv.children[i].style.zIndex > maxZIndex) {\n  //         maxZIndex = currDiv.children[i].style.zIndex;\n  //     }\n  // }\n  // // console.log(currDiv.children);\n  // var annotateJsDiv = document.createElement(\"div\");\n  // annotateJsDiv.className = \"annotateJsDiv\";\n  // annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;\n  //     boxSizing: border-box; z-index: ${maxZIndex + 1}`;\n  // currDiv.appendChild(annotateJsDiv);\n  // annotateJsDiv.onmouseenter = function (event) {\n  //     event.stopPropagation();\n  //     if (currHighlightedDiv !== undefined && currHighlightedDiv !== null) {\n  //         currHighlightedDiv.style.backgroundColor = \"\";\n  //         currHighlightedDiv.style.border = \"\";\n  //     }\n  //     currHighlightedDiv = this;\n  //     this.style.backgroundColor = \"aqua\";\n  //     this.style.boxSizing = \"border-box\";\n  //     this.style.border = \"1px solid blue\";\n  // };\n  // annotateJsDiv.onmouseleave = function (event) {\n  //     event.stopPropagation();\n  //     currHighlightedDiv = undefined;\n  //     this.style.backgroundColor = \"\";\n  //     this.style.border = \"\";\n  // };\n  // console.log(testVec.length);\n  // }\n  // function highlightElement(event){\n  //   const hoverableElements = document.querySelectorAll('[data-attr]');\n  //   for(let elm of hoverableElements){\n  //     const styles = elm.getBoundingClientRect()\n  //       if(event.currentTarget.textContent === elm.dataset.dataAttr) {\n  //         let div = document.createElement('div');\n  //         div.className = 'anotherClass';\n  //         div.style.position = 'absolute';\n  //         div.style.content = '';\n  //         div.style.height = `${styles.height}px`;\n  //         div.style.width = `${styles.width}px`;\n  //         div.style.top = `${styles.top}px`;\n  //         div.style.right = `${styles.right}px`;\n  //         div.style.bottom = `${styles.bottom}px`;\n  //         div.style.left = `${styles.left}px`;\n  //         div.style.background = '#05f';\n  //         div.style.opacity = '0.25';\n  //         document.body.appendChild(div);\n  //     }\n  //   }\n  // }\n  // const allDiv = document.querySelectorAll(\"div\");\n} //generating unique Class name to each and every element in the DOM\n\nvar assignUniqueClasses = function assignUniqueClasses() {\n  var allElements = document.querySelectorAll(\"*\");\n\n  for (var i = 0; i < allElements.length; i++) {\n    allElements[i].classList.add(\"AnnotateJs_\".concat(uniqueClassNameGen, \"_\").concat(i));\n  }\n};\n\nassignUniqueClasses();\ndocument.pointerEvents = \"none\"; // document.body.style.pointerEvents = \"none\";\n\ndocument.body.style.userSelect = \"none\";\nwindow.addEventListener(\"mouseover\", function (e) {\n  updateMask(e.target);\n});\nwindow.addEventListener(\"mousedown\", function (e) {\n  console.log(e.target);\n});\n\nfunction updateMask(target) {\n  var elements = document.getElementsByClassName(\"highlight-wrap\");\n  var hObj;\n\n  if (elements.length !== 0) {\n    hObj = elements[0];\n  } else {\n    hObj = document.createElement(\"div\");\n    hObj.className = \"highlight-wrap\";\n    hObj.style.position = \"absolute\";\n    hObj.style.backgroundColor = \"aqua\";\n    hObj.style.opacity = \"0.5\";\n    hObj.style.cursor = \"default\"; // hObj.style.pointerEvents = \"auto\";\n\n    hObj.style.pointerEvents = \"none\";\n\n    hObj.onmousedown = function (e) {\n      console.log(\"mousedown\");\n    };\n\n    hObj.style.zIndex = \"9999999\";\n    hObj.style.boxSizing = \"border-box\";\n    hObj.style.border = \"1px solid blue\";\n    document.body.appendChild(hObj);\n  }\n\n  var rect = target.getBoundingClientRect(); // target.style.pointerEvents = \"none\";\n\n  hObj.style.left = rect.left + window.scrollX + \"px\";\n  hObj.style.top = rect.top + window.scrollY + \"px\";\n  hObj.style.width = rect.width + \"px\";\n  hObj.style.height = rect.height + \"px\";\n}\n\n//# sourceURL=webpack://annotate-js/./src/main.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://annotate-js/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://annotate-js/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://annotate-js/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://annotate-js/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://annotate-js/./node_modules/uuid/dist/esm-browser/validate.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;