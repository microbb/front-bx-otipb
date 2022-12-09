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
/**
 *  Модальное окна
 * */
class Modal {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector) {
    let {
      modalSelector = null,
      // - селектор модального окна которое мы будем открывать.
      closeSelector = '[data-sumbiot-modal-close]',
      // - селектор который закрывает модальное окно.
      closeClickOverlay = true // - будет ли закрываться окно по клику по подложки
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._trigger = document.querySelectorAll(triggerSelector);
    this.modal = document.querySelector(modalSelector || this._trigger[0].dataset.sumbiotTarget);
    this._close = this.modal.querySelector(closeSelector);
    this._windows = document.querySelectorAll('[data-sumbiot-modal]');
    this._closeClickOverlay = closeClickOverlay;
    this._init();
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this.hideAllModals();
    this._showHandler();
    this._closeHandler();
  }

  /**
   * Скрывает все модальные окна
   * @return {void}
   */
  hideAllModals() {
    this._windows.forEach(modal => {
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'none';
    });
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    this._trigger.forEach(item => {
      item.addEventListener('click', e => {
        this._show(e);
        setTimeout(() => {
          item.blur();
        }, 150);
      });
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show(e) {
    if (e.target) {
      e.preventDefault();
    }
    this.hideAllModals();
    this.modal.style.display = "block";
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this._close.addEventListener('click', e => {
      this._closeModal(e);
    });
    this.modal.addEventListener('click', e => {
      this._closeModalOverlay(e);
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal(e) {
    if (e.target) {
      e.preventDefault();
    }
    this.modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay(e) {
    if (e.target === this.modal && this._closeClickOverlay) {
      this.modal.style.display = "none";
    }
  }
}

/***/ }),

/***/ "./src/js/components/modals/modalDynamics.js":
/*!***************************************************!*\
  !*** ./src/js/components/modals/modalDynamics.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalDynamics; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/components/modals/modal.js");

class ModalDynamics extends _modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Создает скрытый input
   * @return {Node}
   */
  static createInput() {
    const input = document.createElement('input');
    input.classList.add('sumbiot-input-dynamic');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'id');
    return input;
  }

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(triggerSelector, options);
    this._wrapperModalSelector = options.modalWrapper || '.sumbiot-wrapper'; // - родитель куда вставляем модальное окно
    this._wrapperElementSelector = options.elementWrapper || '[data-sumbiot-wrapper]'; // - родитель куда вставить input или ссылку
    this._existsElementForPasteIdSelector = options.existsElementForPasteId; // - элемент уже существует в форме и готов с добавлению id
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    this._trigger.forEach(item => {
      item.addEventListener('click', e => {
        this._show(e, item);
      });
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show(e, trigger) {
    if (e.target) {
      e.preventDefault();
    }
    this.hideAllModals();
    this._modalPosition(trigger);
    this.modal.style.display = "block";
  }

  /**
   * Позицианирует модальное окно в нужное место
   * @param {HTMLElement} trigger - элемент который открывает модальное окно.
   * @return {void}
   */
  _modalPosition(trigger) {
    this._elementPosition(trigger);
    if (!trigger.closest(this._wrapperModalSelector)) {
      trigger.parentElement.classList.add(this._wrapperModalSelector.slice(1));
    }
    this._wpapper = trigger.closest(this._wrapperModalSelector);
    this._wpapper.append(this.modal);
  }

  /**
   * Вставляет input
   * @param {HTMLElement} trigger - элемент который открывает модальное окно.
   * @return {void}
   */
  _elementPosition(trigger) {
    let id = trigger.dataset.id,
      input = this.modal.querySelector('.sumbiot-input-dynamic');
    if (!input) {
      input = ModalDynamics.createInput();
      this.modal.querySelector(this._wrapperElementSelector).prepend(input);
    }
    input.setAttribute('value', id);
  }
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
/* harmony import */ var _components_modals_modalDynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modals/modalDynamics */ "./src/js/components/modals/modalDynamics.js");


window.addEventListener('DOMContentLoaded', () => {
  // модалка добавить сутрудника
  new _components_modals_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-add-user-modal');
  // модалка фильтр
  new _components_modals_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-filter-modal');
  // // модалка удалить сотрудника и удалить удостоверение
  new _components_modals_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-delete-user-modal', {
    closeClickOverlay: false
  });
  // // модалка добавление HSE
  // new ModalSmall('[data-trigger="add-hse-modal"]','[data-modal="add-hse-modal"]','[data-close]',{closeClickOverlay: false})

  // new ModalPosition('[data-trigger="delete-modal"]','[data-modal="delete-modal"]','[data-close]',{closeClickOverlay: false})
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map