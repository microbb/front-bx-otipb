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

/***/ "./src/js/components/visitor.js":
/*!**************************************!*\
  !*** ./src/js/components/visitor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitor; });
/* harmony import */ var _library_sumbiot_modules_accordion_components_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/sumbiot/modules/accordion/components/accordion */ "./src/js/library/sumbiot/modules/accordion/components/accordion.js");


/**
 *  Добавляет новую функциональность уже существующим классам, не изменяя исходный код класса
 * */
class Visitor {
  /**
   * Посититель для экземпляра модального окна которое реализует
   * редактировать / добавить / продлить
   * удостоверение
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static modalsUnity(instanceClass) {
    // метод объединения
    instanceClass.modalsUnity = function () {
      // изменяет заголовок
      const editTitle = target => {
        let btnText = target.innerText;
        this.modal.querySelector('.modal__title').innerText = `${btnText || 'Редактировать'} удостоверение`;
      };

      // изменяет обработчик
      const editAction = target => {
        this.modal.querySelector('form').action = target.dataset.action || '';
      };

      // добавляет user id
      const addUserId = target => {
        if (target.dataset.idUser) {
          const input = document.createElement('input');
          input.classList.add('js-input-user-id');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', 'id_user');
          input.setAttribute('value', target.dataset.idUser);
          this.modal.querySelector('form').prepend(input);
        }
      };

      // удаляет user id
      const deleteUserId = () => {
        const inputs = this.modal.querySelectorAll('input');
        for (let input of inputs) {
          if (input.classList.contains('js-input-user-id')) input.remove();
        }
      };
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          if (target.parentElement.classList.contains(this._trigger.slice(1))) target = target.parentElement;
          try {
            deleteUserId();
            editTitle(target);
            editAction(target);
            addUserId(target);
          } catch (e) {
            console.log(e.message);
          }
        }
      });
    };
  }

  /**
   * Посититель для экземпляра аккрдиона которое реализует
   * переключение класса активности родителю
   * аккрдиона
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static accordionParentMod(instanceClass) {
    // метод переключение
    instanceClass.accordionParentMod = function () {
      // переключает класс
      const toggleParent = target => {
        document.querySelectorAll(this._triggerSelector).forEach(element => {
          if (element === target.closest(this._triggerSelector)) {
            target.closest(this._triggerSelector).parentElement.classList.toggle('result__row--active');
          } else {
            element.parentElement.classList.remove('result__row--active');
          }
        });
      };
      document.addEventListener('click', e => {
        const target = e.target;
        if (target && target.closest(this._triggerSelector)) {
          try {
            toggleParent(target);
          } catch (e) {
            console.log(e.message);
          }
        }
      });
    };
  }
  static sdf(instanceClass) {
    // метод объединения
    instanceClass.sdf = function () {
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          // console.log(target)

          e.stopPropagation();
        }
      }, true);
    };
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/accordion/accordionCore.js":
/*!*******************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/accordion/accordionCore.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccordionCore; });
/**
 *  Аккардион Ядро
 * */
class AccordionCore {
  /**
   * Добавляет новый метод к аккардион, не изменяя исходный код класса(первоначальную реализацию) {паттерн Visitor}
   * @return {this}
   */
  accept(visitor) {
    visitor(this);
    return this;
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/accordion/components/accordion.js":
/*!**************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/accordion/components/accordion.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _accordionCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accordionCore */ "./src/js/library/sumbiot/modules/accordion/accordionCore.js");


/**
 *  Аккардион
 * */

class Accordion extends _accordionCore__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} triggersSelector - селектор который открывает скрытый контент.
   * @param {Object=} options         - конфигурация.
   */
  constructor(triggersSelector) {
    let {
      headActive = null,
      // - активный класс пункта
      contentActive = null,
      // - активный класс контента
      display = 'block',
      // - тип отображаемого элемента
      hideOpen = true // - при открытии аккардиона скрывает все открытые
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this._triggerSelector = triggersSelector;
    this._headActive = headActive || 'sumbiot-accordion-head';
    this._contentActive = contentActive || 'sumbiot-accordion-content';
    this._display = display;
    this._hideOpen = hideOpen;
    this._init();
  }

  /**
   * Инициализация аккардиона
   * @return {void}
   */
  _init() {
    this._toggleHandler();
  }

  /**
   * Обработчик события переключения
   * @return {void}
   */
  _toggleHandler() {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target && target.closest(this._triggerSelector)) {
        const triggerElement = target.closest(this._triggerSelector),
          toggleContent = triggerElement.nextElementSibling;
        if (this._hideOpen) {
          document.querySelectorAll(this._triggerSelector).forEach(element => {
            if (triggerElement === element) {
              this._toggle(triggerElement, toggleContent, e);
            } else {
              element.classList.remove(this._headActive);
              element.nextElementSibling.classList.remove(this._contentActive);
              element.nextElementSibling.style.display = 'none';
            }
          });
        } else {
          this._toggle(triggerElement, toggleContent, e);
        }
      }
    });
  }

  /**
   * Переключатель
   * @return {void}
   */
  _toggle(triggerElement, toggleContent, e) {
    if (e.target) {
      e.preventDefault();
    }
    toggleContent.style.display = toggleContent.style.display === this._display ? 'none' : this._display;
    triggerElement.classList.toggle(this._headActive);
    setTimeout(() => {
      toggleContent.classList.toggle(this._contentActive);
    });
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/modals/components/modal.js":
/*!*******************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/modals/components/modal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _modalCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalCore */ "./src/js/library/sumbiot/modules/modals/modalCore.js");


/**
 *  Модальное окно стандартное
 * */
class Modal extends _modalCore__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    super();
    this._trigger = triggerSelector;
    this.modal = document.querySelector(modalSelector || document.querySelector(triggerSelector).dataset.sumbiotTarget);
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
    document.addEventListener('click', e => {
      const target = e.target;
      if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
        this._show(e);
        setTimeout(() => {
          target.blur();
        }, 150);
      }
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show(e) {
    if (e.target) {
      e.preventDefault();
      e.stopPropagation();
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
    if (e.target) {
      e.stopPropagation();
    }
    if (e.target === this.modal && this._closeClickOverlay) {
      this.modal.style.display = "none";
    }
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/modals/components/modalDynamics.js":
/*!***************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/modals/components/modalDynamics.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalDynamics; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/library/sumbiot/modules/modals/components/modal.js");


/**
 *  Модальное окна c привязкой к блоку
 * */
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
    this._wrapperElementSelector = options.elementWrapper || '[data-sumbiot-wrapper]'; // - родитель куда вставить input
    this._existsElementForPasteIdSelector = options.existsElementForPasteId; // - элемент уже существует в форме и готов с добавлению id
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target && target.classList.contains(this._trigger.slice(1))) {
        this._show(e, target);
      } else if (target.parentElement.classList.contains(this._trigger.slice(1))) {
        this._show(e, target.parentElement);
      }
    }, true);
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
   * Вставляет input или добавляет data-sumbiot-id в нужный элемент
   * @param {HTMLElement} trigger - элемент который открывает модальное окно.
   * @return {void}
   */
  _elementPosition(trigger) {
    let id = trigger.dataset.id,
      elementForPasteId = this.modal.querySelector(this._existsElementForPasteIdSelector || '.sumbiot-input-dynamic');
    if (!elementForPasteId) {
      elementForPasteId = ModalDynamics.createInput();
      this.modal.querySelector(this._wrapperElementSelector) ? this.modal.querySelector(this._wrapperElementSelector).prepend(elementForPasteId) : this.modal.querySelector('form').prepend(elementForPasteId);
    }
    this._existsElementForPasteIdSelector ? elementForPasteId.setAttribute('data-sumbiot-id', id) : elementForPasteId.setAttribute('value', id);
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/modals/modalCore.js":
/*!************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/modals/modalCore.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalCore; });
/**
 *  Модальное окно Ядро
 * */
class ModalCore {
  /**
   * Добавляет новый метод к модалки, не изменяя исходный код класса(первоначальную реализацию) {паттерн Visitor}
   * @return {this}
   */
  accept(visitor) {
    visitor(this);
    return this;
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
/* harmony import */ var _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/sumbiot/modules/modals/components/modal */ "./src/js/library/sumbiot/modules/modals/components/modal.js");
/* harmony import */ var _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/sumbiot/modules/modals/components/modalDynamics */ "./src/js/library/sumbiot/modules/modals/components/modalDynamics.js");
/* harmony import */ var _library_sumbiot_modules_accordion_components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/sumbiot/modules/accordion/components/accordion */ "./src/js/library/sumbiot/modules/accordion/components/accordion.js");
/* harmony import */ var _components_visitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/visitor */ "./src/js/components/visitor.js");




window.addEventListener('DOMContentLoaded', () => {
  // модалка фильтр
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-filter-modal');
  // модалка добавить сутрудника
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-add-user-modal');
  // модалка редактировать сотрудника
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-user-modal', {
    modalWrapper: '.js-wrapper-modal'
  });
  // модалка удалить сотрудника
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-delete-user-modal', {
    closeClickOverlay: false
  });

  // модалка добавить / редактировать / продлить удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-card-modal', {
    modalWrapper: '.js-wrapper-modal'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_3__["default"].modalsUnity).modalsUnity();

  // модалка удалить удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-delete-card-modal', {
    closeClickOverlay: false
  });
  // модалка добавление HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-add-hse-modal', {
    closeClickOverlay: false
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_3__["default"].sdf).sdf();

  // модалка редактировать HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-hse-modal', {
    modalWrapper: '.js-wrapper-modal'
  });

  // аккардион
  new _library_sumbiot_modules_accordion_components_accordion__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-accordion', {
    contentActive: 'result__info--active',
    display: 'grid'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_3__["default"].accordionParentMod).accordionParentMod();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map