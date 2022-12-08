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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/modals/modal.js":
/*!*******************************************!*\
  !*** ./src/js/components/modals/modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 *  Модальное окно стандартное
 * */
class Modal {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector, modalSelector, closeSelector) {
    let {
      closeClickOverlay = true // - будет ли закрываться окно по клику по подложки
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _defineProperty(this, "_showModal", e => {
      if (e.target) {
        e.preventDefault();
      }
      this._hideAllModals();
      this._modal.style.display = "block";
    });
    _defineProperty(this, "_closeModalOverlay", e => {
      if (e.target === this._modal && this._closeClickOverlay) {
        this._hideAllModals();
        this._modal.style.display = "none";
      }
    });
    this._trigger = document.querySelectorAll(triggerSelector);
    this._modal = document.querySelector(modalSelector);
    this._close = this._modal.querySelector(closeSelector);
    this._windows = document.querySelectorAll('[data-modal]');
    this._closeClickOverlay = closeClickOverlay;
    this._init();
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this._hideAllModals();
    this._trigger.forEach(item => {
      item.addEventListener('click', e => {
        this._showModal(e);
        setTimeout(() => {
          item.blur();
        }, 150);
      });
    });
    this._close.addEventListener('click', e => {
      this._closeModal(e);
    });
    this._modal.addEventListener('click', this._closeModalOverlay);
  }

  /**
   * Скрывает все модальные окна
   * @return {void}
   */
  _hideAllModals() {
    this._windows.forEach(modal => {
      modal.style.display = 'none';
      modal.classList.add('animated', 'fadeIn');
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal(e) {
    if (e.target) {
      e.preventDefault();
    }
    this._hideAllModals();
    this._modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
}

/***/ }),

/***/ "./src/js/components/modals/modalDelete.js":
/*!*************************************************!*\
  !*** ./src/js/components/modals/modalDelete.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalDelete; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/components/modals/modal.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 *  Модальное окно удаление
 * */
class ModalDelete extends _modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string | Object} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector, modalSelector, closeSelector) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super(triggerSelector, modalSelector, closeSelector, options);
    _defineProperty(this, "_closeModalOverlay", e => {
      if (e.target === this._modal && this._closeClickOverlay) {
        this._hideAllModals();
        this._modal.style.display = "none";
      }
    });
    this._modal = document.querySelector(modalSelector).cloneNode(true);
    this._close = this._modal.querySelector(closeSelector);
    console.log(this._modal, this._close);
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this._hideAllModals();
    this._trigger.forEach(item => {
      item.addEventListener('click', e => {
        this._showModal(e);
        this._parent = item.closest('[data-wrapper]');
        this._parent.append(this._modal);
        this._close = this._modal.querySelector('[data-close="close-modal"]');
        this._close.addEventListener('click', e => {
          this._closeModal(e);
        });
        this._modal.addEventListener('click', this._closeModalOverlay);
      });
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal(e) {
    super._closeModal(e);
    this._parent.querySelector('[data-modal="delete-modal"]').remove();
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modals_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modals/modal */ "./src/js/components/modals/modal.js");
/* harmony import */ var _components_modals_modalDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modals/modalDelete */ "./src/js/components/modals/modalDelete.js");
console.log("Тест");



// модалка добавить сутрудника
new _components_modals_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-trigger="user-modal"]', '[data-modal="user-modal"]', '[data-close="close-modal"]');
// модалка фильтр
new _components_modals_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-trigger="filter-modal"]', '[data-modal="filter-modal"]', '[data-close="close-modal"]');
let t = new _components_modals_modalDelete__WEBPACK_IMPORTED_MODULE_1__["default"]('[data-trigger="delete-modal"]', '[data-modal="delete-modal"]', '[data-close="close-modal"]');
console.dir(t);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map