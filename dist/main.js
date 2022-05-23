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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderPage */ \"./src/modules/renderPage.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://ozone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartCloseBtn = document.querySelector('.cart-close')\r\n    const goodsWrapper = document.querySelector('.goods')\r\n    const cartTotal = document.querySelector('.cart-total > span')\r\n    const cartContainer = document.querySelector('.cart-wrapper')\r\n    const cartSend = document.querySelector('.cart-confirm')\r\n    const cartCounter = document.querySelector('.counter')\r\n\r\n\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex'\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\r\n        cartTotal.textContent = cart.reduce((sum, goodsItem) => {\r\n            return sum + goodsItem.price\r\n        },0)\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartCloseBtn.addEventListener('click', closeCart)\r\n\r\n    \r\n    goodsWrapper.addEventListener('click', (evt) => {\r\n        if (evt.target.classList.contains('btn-primary')) {\r\n            const key = evt.target.closest('.card').dataset.key\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +key\r\n            })\r\n            cart.push(goodItem)\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            // cartCounter.textContent = cart.reduce((sum, goodsItem) => {\r\n            //     return sum + 1\r\n            // },0)\r\n\r\n            cartCounter.textContent = Number(cartCounter.textContent) + 1\r\n            \r\n        }\r\n\r\n\r\n    })\r\n\r\n    cartContainer.addEventListener('click', (evt) => {\r\n        if (evt.target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n            const key = evt.target.closest('.card').dataset.key;\r\n\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key;\r\n            })\r\n\r\n            cart.splice(index, 1)\r\n\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\r\n            cartTotal.textContent = cart.reduce((sum, goodsItem) => {\r\n                return sum + goodsItem.price\r\n            },0)\r\n\r\n            cartCounter.textContent = cartCounter.textContent - 1\r\n        }\r\n\r\n    })\r\n\r\n    cartSend.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            localStorage.removeItem('cart')\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n\r\n            cartTotal.textContent = 0\r\n\r\n            cartCounter.textContent = 0\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _searchFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchFilter */ \"./src/modules/searchFilter.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n\r\n    const catalogCat = document.querySelectorAll('.catalog-list li')\r\n\r\n\r\n    let swithcer = false;\r\n    btnCatalog.addEventListener('click', () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n        })\r\n        if (swithcer) {\r\n            catalogModal.style.display = 'none';\r\n            swithcer = false;\r\n        }\r\n        else {\r\n            catalogModal.style.display = 'block';\r\n            swithcer = true;\r\n        }\r\n    })\r\n\r\n    catalogCat.forEach((elem) => {\r\n        elem.addEventListener('click', () => {\r\n            catalogModal.style.display = 'none';\r\n            swithcer = false;\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.searchCatalog)(data, elem.textContent));\r\n            })\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _searchFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchFilter */ \"./src/modules/searchFilter.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n    const minPrice = document.getElementById('min')\r\n    const maxPrice = document.getElementById('max')\r\n    const checkBox = document.querySelector('#discount-checkbox')\r\n    const checkBoxicon = document.querySelector('.filter-check_checkmark')\r\n\r\n    checkBox.addEventListener('change', () => {\r\n        checkBoxicon.classList.toggle('checked')\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.priceFilter)((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.hotsaleFilter)(data, checkBox.checked), minPrice.value, maxPrice.value));\r\n        })\r\n    })\r\n\r\n    minPrice.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.priceFilter)((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.hotsaleFilter)(data, checkBox.checked), minPrice.value, maxPrice.value));\r\n        })\r\n    })\r\n\r\n    maxPrice.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.priceFilter)((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.hotsaleFilter)(data, checkBox.checked), minPrice.value, maxPrice.value));\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://ozone/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst getDataPH = () => {\r\n    return fetch('https://test-e79a5-default-rtdb.firebaseio.com/goods.json')\r\n    .then((response) => {\r\n        return response.json();\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataPH);\n\n//# sourceURL=webpack://ozone/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postDataPH = (cart) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      })\r\n    .then((response) => response.json())\r\n  }\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDataPH);\n\n//# sourceURL=webpack://ozone/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (data) => {\r\n    const cartContainer = document.querySelector('.cart-wrapper');\r\n\r\n    cartContainer.innerHTML = '';\r\n\r\n    if (data.length === 0) {\r\n        cartContainer.insertAdjacentHTML('beforeend', `\r\n        <div id=\"cart-empty\">\r\n        Ваша корзина пока пуста\r\n        </div>`)\r\n    } else {\r\n        data.forEach((item) => {\r\n            cartContainer.insertAdjacentHTML('beforeend', `\r\n                    <div class=\"card\" data-key=\"${item.id}\">\r\n                        ${(item.sale) ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>': ''}\r\n                        <div class=\"card-img-wrapper\">\r\n                            <span class=\"card-img-top\"\r\n                                style=\"background-image: url('${item.img}')\"></span>\r\n                        </div>\r\n                        <div class=\"card-body justify-content-between\">\r\n                            <div class=\"card-price\">${item.price} ₽</div>\r\n                            <h5 class=\"card-title\">${item.title}</h5>\r\n                            <button class=\"btn btn-primary\">Удалить</button>\r\n                        </div>\r\n                    </div>`)\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozone/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (data) => {\r\n    const goodsContainer = document.querySelector('.goods');\r\n\r\n    goodsContainer.innerHTML = '';\r\n\r\n    localStorage.setItem('goods', JSON.stringify(data))\r\n\r\n    data.forEach((item) => {\r\n        goodsContainer.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${item.id}\">\r\n                    ${(item.sale) ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>': ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${item.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${item.price} ₽</div>\r\n                        <h5 class=\"card-title\">${item.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>`)\r\n\r\n     })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozone/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/renderPage.js":
/*!***********************************!*\
  !*** ./src/modules/renderPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst renderPage = () => {\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n            })\r\n\r\n    // cartBtn.addEventListener('click', () => {\r\n    //     postDataPH().then((data) => {\r\n    //         console.log(data);\r\n    //     })\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n//# sourceURL=webpack://ozone/./src/modules/renderPage.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _searchFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchFilter */ \"./src/modules/searchFilter.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchPannel = document.querySelector('.search-wrapper_input')\r\n\r\n    searchPannel.addEventListener('input', (input) => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_searchFilter__WEBPACK_IMPORTED_MODULE_0__.searchFilter)(data, input.target.value));\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozone/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/searchFilter.js":
/*!*************************************!*\
  !*** ./src/modules/searchFilter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hotsaleFilter\": () => (/* binding */ hotsaleFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchCatalog\": () => (/* binding */ searchCatalog),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (data, value) => {\r\n    return data.filter((item) => {\r\n        return item.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\nconst searchCatalog = (data, value) => {\r\n    return data.filter((item) => {\r\n        return item.category === value;\r\n    })\r\n}\r\n\r\nconst priceFilter = (data, min, max) => {\r\n    return data.filter((item) => {\r\n        if (min === '' && max ==='') {\r\n            return item;\r\n        } else if (min !== '' && max =='') {\r\n            return item.price > +min\r\n        } else if (min == '' && max !=='') {\r\n            return item.price < +max\r\n        } else if (min !== '' && max !=='') {\r\n            return (item.price < +max) && (item.price > +min);\r\n        }\r\n    })\r\n}\r\n\r\nconst hotsaleFilter = (data, value) => {\r\n    return data.filter((item) => {\r\n        if (value) {\r\n            return item.sale === true; \r\n        } else return item;\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ozone/./src/modules/searchFilter.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;