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

/***/ "./src/js/components/add-or-edit-hse.component.js":
/*!********************************************************!*\
  !*** ./src/js/components/add-or-edit-hse.component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddOrEditHseComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/validators */ "./src/js/core/validators.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");





/**
 *  Компонент добавить кастомного сотрудника
 * */
class AddOrEditHseComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      ID_MATRIX_WORKS: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/add-user.component.js":
/*!*************************************************!*\
  !*** ./src/js/components/add-user.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddUserComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/validators */ "./src/js/core/validators.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");





/**
 *  Компонент добавить кастомного сотрудника
 * */
class AddUserComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      E_FIO: [],
      ID_DIVISION: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_DEPARTMENT: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_MATRIX_WORKS: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      E_EMPLOYEE_STATUS: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/delete-user-or-card.component.js":
/*!************************************************************!*\
  !*** ./src/js/components/delete-user-or-card.component.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteUserOrCardComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");




/**
 *  Компонент добавить кастомного сотрудника
 * */
class DeleteUserOrCardComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: []
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/edit-card.component.js":
/*!**************************************************!*\
  !*** ./src/js/components/edit-card.component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditCardComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");




/**
 *  Компонент добавить кастомного сотрудника
 * */
class EditCardComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      C_ATTESTATION_DATE: [],
      C_NEXT_ATTESTATION_DATE: [],
      C_CARD_NUMBER: []
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/edit-user.component.js":
/*!**************************************************!*\
  !*** ./src/js/components/edit-user.component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditUserComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/validators */ "./src/js/core/validators.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");





/**
 *  Компонент добавить кастомного сотрудника
 * */
class EditUserComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      E_FIO: [],
      ID_DIVISION: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_DEPARTMENT: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_MATRIX_WORKS: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      E_EMPLOYEE_STATUS: [_core_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/filter.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/filter.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");




/**
 *  Компонент добавить кастомного сотрудника
 * */
class FilterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      DATE_BEGIN: [],
      DATE_END: [],
      ID_DIVISION: [],
      ID_MATRIX_WORKS: [],
      ID_PROGRAM: []
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/search.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/search.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ "./src/js/core/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");




/**
 *  Компонент добавить кастомного сотрудника
 * */
class SearchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      SEARCH: [],
      STATUS: []
    });
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    console.log('Триста тридцать три');
  }
}

/***/ }),

/***/ "./src/js/components/stretch.js":
/*!**************************************!*\
  !*** ./src/js/components/stretch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stretch; });
/**
 *  Панель для выпадающего списка, для раскрытия списка по горизонтали
 * */
class Stretch {
  /**
   * Конструктор
   * @param {string} panelsSelector   - селектор панелей для выпадающего списка.
   * @param {string} stretchSelector  - селектор элемента над которым будет проводится модификация.
   * @param {string} activeClass      - класс модификатор для элемента над которым будет проводится модификация.
   */
  constructor(panelsSelector, stretchSelector, activeClass) {
    this._panelsElements = document.querySelectorAll(panelsSelector);
    this._stretchSelector = stretchSelector;
    this._activeClass = activeClass;
    this._init();
  }

  /**
   * Инициализация
   * @return {void}
   */
  _init() {
    this._stretchHandler();
  }

  /**
   * Обработчик события клика по панели
   * @return {void}
   */
  _stretchHandler() {
    this._panelsElements.forEach(panel => {
      let stretchBtn = panel.querySelector('.option-panel__item--stretch');
      stretchBtn.addEventListener('click', e => {
        e.preventDefault();
        this._toggle(panel, stretchBtn);
      });
    });
  }

  /**
   * Развернуть или свернуть список по горизонтали
   * @return {void}
   */
  _toggle(panelElement, stretchBtnElement) {
    panelElement.closest(this._stretchSelector).classList.toggle(this._activeClass);
    stretchBtnElement.classList.toggle('option-panel__item--stretch-off');
    stretchBtnElement.title.toLowerCase() === 'развернуть' ? stretchBtnElement.setAttribute('title', 'Свернуть') : stretchBtnElement.setAttribute('title', 'Развернуть');
  }
}

/***/ }),

/***/ "./src/js/components/visitor.js":
/*!**************************************!*\
  !*** ./src/js/components/visitor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitor; });
/* harmony import */ var _core_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/support */ "./src/js/core/support.js");


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
  static modalsUnityMod(instanceClass) {
    instanceClass.upgrade = function () {
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
          input.setAttribute('name', 'ID_USER');
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
          if (target.parentElement.classList.contains(this._trigger.slice(1))) {
            target = target.parentElement;
          }
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].addClosestClass(target, '.js-wrapper-modal', ['result__info--min_height-380']);
          deleteUserId();
          editTitle(target);
          editAction(target);
          addUserId(target);
        }
      });

      // по кнопки закрытия модального окна
      this._close.addEventListener('click', e => {
        _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-380']);
      });

      // на подложки
      this.modal.addEventListener('click', e => {
        if (e.target === this.modal && this._closeClickOverlay) {
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-380']);
        }
      });
    };
  }

  /**
   * Посититель для экземпляра модального окна (добавления сотрудника и фильтр) которое реализует
   * сброс высоты до стандартной
   * у блока 'result__info'
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static modalsStandardMod(instanceClass) {
    instanceClass.upgrade = function () {
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
        }
      });
    };
  }

  /**
   * Посититель для экземпляра модального окна (редактировать сотрудника) которое реализует
   * подгон высоты для родительского блока под
   * модальное окно
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static editUserMod(instanceClass) {
    instanceClass.upgrade = function () {
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          if (target.parentElement.classList.contains(this._trigger.slice(1))) target = target.parentElement;
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].addClosestClass(target, '.js-wrapper-modal', ['result__info--min_height-442']);
        }
      });

      // по кнопки закрытия модального окна
      this._close.addEventListener('click', e => {
        _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-442']);
      });

      // на подложки
      this.modal.addEventListener('click', e => {
        if (e.target === this.modal && this._closeClickOverlay) {
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-442']);
        }
      });
    };
  }

  /**
   * Посититель для экземпляра модального окна (удаления) которое реализует
   * удаление
   * удостоверение / сотрудника
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static modalsUnityDeleteMod(instanceClass) {
    instanceClass.upgrade = function () {
      // изменяет обработчик
      const editAction = target => {
        this.modal.querySelector('form').action = target.dataset.action || '';
      };
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          if (target.parentElement.classList.contains(this._trigger.slice(1))) {
            target = target.parentElement;
          }
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          editAction(target);
        }
      });
    };
  }

  /**
   * Посититель для экземпляра модального окна (добавить HSE) которое реализует
   * останавку распростронения события и следит за позиционированием
   * модального окна
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static addHseMod(instanceClass) {
    instanceClass.upgrade = function (instanceDropDown) {
      // если до низу экрана меньше 210px позицианируем модалку вверху кнопки
      const modalPosition = e => {
        if (window.innerHeight - e.clientY < 210) {
          this.modal.classList.add("modal--position-top");
        } else {
          this.modal.classList.remove("modal--position-top");
        }
      };
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          e.stopPropagation();
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          instanceDropDown.reset(this.modal.querySelector('#add-hse'));
          modalPosition(e);
        }
      }, true);
    };
  }

  /**
   * Посититель для экземпляра модального окна (редактировать HSE) которое реализует
   * подгон высоты для родительского блока под
   * модальное окно
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static editHseMod(instanceClass) {
    instanceClass.upgrade = function () {
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          if (target.parentElement.classList.contains(this._trigger.slice(1))) {
            target = target.parentElement;
          }
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].addClosestClass(target, '.js-wrapper-modal', ['result__info--min_height-265']);
        }
      });

      // по кнопки закрытия модального окна
      this._close.addEventListener('click', e => {
        _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-265']);
      });

      // на подложки
      this.modal.addEventListener('click', e => {
        if (e.target === this.modal && this._closeClickOverlay) {
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClosestClass(e.target, '.js-wrapper-modal', ['result__info--min_height-265']);
        }
      });
    };
  }

  /**
   * Посититель для экземпляра выподающего списка которое реализует
   * позицианирование
   * выподающего списка
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static positionMod(instanceClass) {
    instanceClass.upgrade = function () {
      // если до низу экрана меньше 372px позицианируем модалку вверху кнопки
      const selectPosition = (wrap, e) => {
        if (document.documentElement.scrollHeight - e.pageY < 400) {
          wrap.nextElementSibling.classList.add('dropdown__options--top-position');
        } else {
          wrap.nextElementSibling.classList.remove('dropdown__options--top-position');
        }
      };
      let optionWrap = document.querySelectorAll('.js-dropdown__toggle');
      optionWrap.forEach(wrap => {
        wrap.addEventListener('click', e => {
          e.preventDefault();
          selectPosition(wrap, e);
        });
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
    instanceClass.upgrade = function () {
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
          toggleParent(target);
        }
      });
    };
  }
}

/***/ }),

/***/ "./src/js/core/component.js":
/*!**********************************!*\
  !*** ./src/js/core/component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/**
 *  Базовый класс для компонентов
 * */
class Component {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id) {
    let {} = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.$el = document.querySelector(id);
    this._init();
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {}

  /**
   * Скрывает компонент
   * @return {void}
   */
  hide() {
    this.$el.classList.add('hide');
    this._onHide(); // -> после скрытия компонента вызываем метод
  }

  /**
   * Показать компонент
   * @return {void}
   */
  show() {
    this.$el.classList.remove('hide');
    this._onShow(); // -> после показа компонента вызываем метод
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
  _onHide() {}

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow() {}
}

/***/ }),

/***/ "./src/js/core/form.js":
/*!*****************************!*\
  !*** ./src/js/core/form.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/**
 *  Базовый класс для работы с формами
 * */
class Form {
  /**
   * Конструктор
   * @param {Element} form      - форма.
   * @param {Object=} controls  - поля формы.
   */
  constructor(form) {
    let controls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.form = form;
    this.controls = controls;
  }

  /**
   * Вытаскивает значения из полей формы
   * @return {Object}
   */
  value() {
    const value = {};
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value;
    });
    return value;
  }

  /**
   * Проверка на валидацию
   * @return {boolean}
   */
  isValid() {
    let isFormValid = true; // Флаг

    Object.keys(this.controls).forEach(control => {
      if (this.controls[control].length) {
        const validators = this.controls[control]; // массив с валидаторами

        let isValid = true; // Флаг

        validators.forEach(validator => {
          isValid = validator(this.form[control].value) && isValid; // запускаем валидаторы по цепочки
        });

        //если элемент формы валиден
        isValid ? clearError(this.form[control]) : setError(this.form[control]);
        //если элемент формы невалиден

        isFormValid = isFormValid && isValid; // переключаем Флаг
      }
    });

    return isFormValid;
  }

  /**
   * Очищаем форму
   * @return {void}
   */
  clear() {
    this.form.reset();
  }
}

/**
 * Сформировать и отправить ошибку
 * @return {void}
 */
function setError($control) {
  clearError($control); // удаляет сообщения об ошибки

  const error = '<span class="form__validation-error">Введите значение</span>'; // формируем сообшения об ошибки

  $control.nextElementSibling.firstElementChild.style.backgroundColor = '#fff5f5'; // подсветить не валидный элемент красным цветом

  $control.previousElementSibling.insertAdjacentHTML('beforeend', error); // добавляем сообщения от ошибки для невалидного элемента
}

/**
 * Удалить сообщения об ошибки
 * @return {void}
 */
function clearError($control) {
  $control.nextElementSibling.firstElementChild.style.backgroundColor = ''; // удалить подсветку

  // элемент с ошибкой сушествует
  if ($control.previousElementSibling.querySelector('.form__validation-error')) {
    $control.previousElementSibling.querySelector('.form__validation-error').remove(); // удаляет ошибку
  }
}

/***/ }),

/***/ "./src/js/core/support.js":
/*!********************************!*\
  !*** ./src/js/core/support.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Support; });
/**
 *  Базовый набор функций для проекта
 * */
class Support {
  /**
   * Удаления класс(ов) у элементов
   * @param {string} elementSelector - селектор элементов у которых надо удалить класс(ы).
   * @param {array} arrayClasses     - массив со списком классов.
   * @return {void}
   */
  static removeClass(elementSelector, arrayClasses) {
    document.querySelectorAll(elementSelector).forEach(element => {
      element.classList.remove(...arrayClasses);
    });
  }

  /**
   * Добавление класс(ов) у ближайщего подходящего родителя
   * @param {Element} element       - элемент у которого надо найти ближайщего подходящего родителя.
   * @param {string} searchSelector - селектор который надо найти у родителя.
   * @param {array} arrayClasses    - массив со списком классов.
   * @return {void}
   */
  static addClosestClass(element, searchSelector, arrayClasses) {
    element.closest(searchSelector).classList.add(...arrayClasses);
  }

  /**
   * Удаления класс(ов) у ближайщего подходящего родителя
   * @param {Element} element       - элемент у которого надо найти ближайщего подходящего родителя.
   * @param {string} searchSelector - селектор который надо найти у родителя.
   * @param {array} arrayClasses    - массив со списком классов.
   * @return {void}
   */
  static removeClosestClass(element, searchSelector, arrayClasses) {
    element.closest(searchSelector).classList.remove(...arrayClasses);
  }
}

/***/ }),

/***/ "./src/js/core/validators.js":
/*!***********************************!*\
  !*** ./src/js/core/validators.js ***!
  \***********************************/
/*! exports provided: Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/**
 *  Вылидаторы для форм
 * */
class Validators {
  /**
   * Валидатор: вы незаполнили поле
   * @return {string}
   */
  static required() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return value && value.trim();
  }

  /**
   * Валидатор: минимальное число симаолов
   * @return {function}
   */
  static minLength(length) {
    return value => {
      return value.length >= length;
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
 *  Аккардион стандарт
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

/***/ "./src/js/library/sumbiot/modules/dropdown/components/dropdown.js":
/*!************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/dropdown/components/dropdown.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _dropdownCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropdownCore */ "./src/js/library/sumbiot/modules/dropdown/dropdownCore.js");


/**
 *  Выподающий список стандарт
 * */
class Dropdown extends _dropdownCore__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} dropdownSelector - селектор выподающего списка.
   * @param {Object=} options         - конфигурация.
   */
  constructor(dropdownSelector) {
    let {
      dropdownToggleSelector = '.dropdown-sumbiot__toggle',
      // - активный пункт
      dropdownOptionsWrapperSelector = '.dropdown-sumbiot__options' // - выпадающий список
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this._dropdownSelector = dropdownSelector;
    this._dropdownToggleSelector = dropdownToggleSelector;
    this._listDropdowns = document.querySelectorAll(dropdownSelector);
    this._listDropdownsOptions = document.querySelectorAll(dropdownOptionsWrapperSelector);
    this._init();
  }

  /**
   * Инициализация выподающего списка
   * @return {void}
   */
  _init() {
    this.hideAllDropdowns();
    this._toggleHandler();
  }

  /**
   * Скрывает все открытые выподающие списки
   * @return {void}
   */
  hideAllDropdowns() {
    this._listDropdownsOptions.forEach(dropdownOpen => {
      if (this._target) {
        if (this._target.nextElementSibling !== dropdownOpen) {
          dropdownOpen.style.display = 'none';
        }
      } else {
        dropdownOpen.style.display = 'none';
      }
    });
  }

  /**
   * Обработчик события клика по элементу который открывает выподающие меню
   * @return {void}
   */
  _toggleHandler() {
    this._listDropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', e => {
        if (e.target && e.target.classList.contains(this._dropdownToggleSelector.slice(1))) {
          e.preventDefault();
          this._target = e.target;
          this._toggleOptions();
        }
      });
    });
  }

  /**
   * Открыть выподающие меню
   * @return {void}
   */
  _toggleOptions() {
    this.hideAllDropdowns();
    this._target.nextElementSibling.style.display = this._target.nextElementSibling.style.display === 'none' ? 'block' : 'none';
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/dropdown/components/dropdownSelect.js":
/*!******************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/dropdown/components/dropdownSelect.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownSelect; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./src/js/library/sumbiot/modules/dropdown/components/dropdown.js");


/**
 *  Выподающий список Select
 * */
class DropdownSelect extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} dropdownSelector - селектор выподающего списка.
   * @param {Object=} options         - конфигурация.
   */
  constructor(dropdownSelector) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(dropdownSelector, options);
    this._dropdownOptionSelector = options.dropdownOptionSelector || '[data-select-option]'; // - пункты выподающего списка
  }

  /**
   * Обработчик события клика по элементу который открывает выподающие меню
   * @return {void}
   */
  _toggleHandler() {
    this._listDropdowns.forEach(dropdown => {
      this._initInput(dropdown);
      dropdown.addEventListener('click', e => {
        if (e.target && e.target.classList.contains(this._dropdownToggleSelector.slice(1))) {
          e.preventDefault();
          this._target = e.target;
          this._toggleOptions();
        } else if (e.target && e.target.matches(this._dropdownOptionSelector)) {
          e.preventDefault();
          this._select(dropdown, e.target);
        }
      });
    });
    document.addEventListener('click', e => {
      if (e.target && !e.target.closest(this._dropdownSelector)) {
        this._listDropdownsOptions.forEach(dropdownOpen => {
          dropdownOpen.style.display = 'none';
        });
      }
    }, true);
  }

  /**
   * Выбирает активный пункт
   * @return {void}
   */
  _select(dropdown, optionActive) {
    const options = dropdown.querySelectorAll(this._dropdownOptionSelector),
      showOption = dropdown.querySelector(this._dropdownToggleSelector);
    options.forEach(option => {
      option.style.backgroundColor = '';
    });

    // на пункте
    optionActive.style.backgroundColor = '#e7e7e7';

    // активный пункт
    showOption.innerHTML = optionActive.innerText;
    if (optionActive.getAttribute('title')) {
      showOption.setAttribute('title', optionActive.getAttribute('title'));
    }

    // обертка пунктов
    showOption.nextElementSibling.style.display = 'none';

    // input
    dropdown.previousElementSibling.setAttribute('value', optionActive.dataset.selectOption);
  }

  /**
   * Создает input для кастомного select(а)
   * @return {void}
   */
  _initInput(dropdown) {
    const input = document.createElement('input');
    input.classList.add('sumbiot-input-select');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', dropdown.dataset.selectName);
    input.setAttribute('value', '');
    dropdown.insertAdjacentElement('beforebegin', input);
  }

  /**
   * Сброс input(ов) до состояния по умолчанию для кастомного select(а) в форме
   * @return {void}
   */
  reset(formNode) {
    const toggles = formNode.querySelectorAll(this._dropdownToggleSelector),
      options = formNode.querySelectorAll(this._dropdownOptionSelector),
      inputs = formNode.querySelectorAll('.sumbiot-input-select');

    // активный пункт
    toggles.forEach(toggle => {
      toggle.innerText = '';
      toggle.removeAttribute('title');
    });

    // пункты списка
    options.forEach(option => {
      option.style.backgroundColor = '';
    });

    // input
    inputs.forEach(input => {
      input.setAttribute('value', '');
    });
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/dropdown/dropdownCore.js":
/*!*****************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/dropdown/dropdownCore.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownCore; });
/**
 *  Выподающий список Ядро
 * */
class DropdownCore {
  /**
   * Добавляет новый метод к выподающиму списку, не изменяя исходный код класса(первоначальную реализацию) {паттерн Visitor}
   * @return {this}
   */
  accept(visitor) {
    visitor(this);
    return this;
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
 *  Модальное окно стандарт
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
        e.preventDefault();
        e.stopPropagation();
        this._show();
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
  _show() {
    this.hideAllModals();
    this.modal.style.display = "block";
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this._close.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
        this._closeModal();
      }
    });
    this.modal.addEventListener('click', e => {
      if (e.target) {
        e.stopPropagation();
        this._closeModalOverlay(e);
      }
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal() {
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
    input.setAttribute('name', 'ID');
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
        e.preventDefault();
        this._triggerEvent = target;
        this._show();
      } else if (target.parentElement.classList.contains(this._trigger.slice(1))) {
        e.preventDefault();
        this._triggerEvent = target.parentElement;
        this._show();
      }
    }, true);
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show() {
    this.hideAllModals();
    this._modalPosition();
    this.modal.style.display = "block";
  }

  /**
   * Позицианирует модальное окно в нужное место
   * @return {void}
   */
  _modalPosition() {
    this._elementPosition();
    if (!this._triggerEvent.closest(this._wrapperModalSelector)) {
      this._triggerEvent.parentElement.classList.add(this._wrapperModalSelector.slice(1));
    }
    this._wpapper = this._triggerEvent.closest(this._wrapperModalSelector);
    this._wpapper.append(this.modal);
  }

  /**
   * Вставляет input или добавляет data-sumbiot-id в нужный элемент
   * @return {void}
   */
  _elementPosition() {
    let id = this._triggerEvent.dataset.id,
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
/* harmony import */ var _library_sumbiot_modules_dropdown_components_dropdownSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/sumbiot/modules/dropdown/components/dropdownSelect */ "./src/js/library/sumbiot/modules/dropdown/components/dropdownSelect.js");
/* harmony import */ var _components_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-user.component */ "./src/js/components/add-user.component.js");
/* harmony import */ var _components_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filter.component */ "./src/js/components/filter.component.js");
/* harmony import */ var _components_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-user.component */ "./src/js/components/edit-user.component.js");
/* harmony import */ var _components_delete_user_or_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/delete-user-or-card.component */ "./src/js/components/delete-user-or-card.component.js");
/* harmony import */ var _components_edit_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit-card.component */ "./src/js/components/edit-card.component.js");
/* harmony import */ var _components_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-or-edit-hse.component */ "./src/js/components/add-or-edit-hse.component.js");
/* harmony import */ var _components_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search.component */ "./src/js/components/search.component.js");
/* harmony import */ var _components_visitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/visitor */ "./src/js/components/visitor.js");
/* harmony import */ var _components_stretch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/stretch */ "./src/js/components/stretch.js");













window.addEventListener('DOMContentLoaded', () => {
  // выподающий список
  const dropDown = new _library_sumbiot_modules_dropdown_components_dropdownSelect__WEBPACK_IMPORTED_MODULE_3__["default"]('.dropdown', {
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  });
  dropDown.accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].positionMod).upgrade();

  // панель которая регулирует ширина выподающего списка
  new _components_stretch__WEBPACK_IMPORTED_MODULE_12__["default"]('.js-option-panel', '.dropdown__options', 'dropdown__options--stretch');

  // модалка фильтр
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-filter-modal').accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].modalsStandardMod).upgrade();
  // модалка добавить сутрудника
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-add-user-modal').accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].modalsStandardMod).upgrade();

  // модалка редактировать сотрудника
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-user-modal', {
    modalWrapper: '.js-wrapper-modal'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].editUserMod).upgrade();
  // модалка удалить сотрудника / удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-delete-user-and-card-modal', {
    closeClickOverlay: false
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].modalsUnityDeleteMod).upgrade();
  // модалка добавить / редактировать / продлить удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-card-modal', {
    modalWrapper: '.js-wrapper-modal'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].modalsUnityMod).upgrade();
  // модалка добавление HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-add-hse-modal', {
    closeClickOverlay: false
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].addHseMod).upgrade(dropDown);
  // модалка редактировать HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-hse-modal', {
    modalWrapper: '.js-wrapper-modal'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].editHseMod).upgrade();

  // аккардион
  new _library_sumbiot_modules_accordion_components_accordion__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-accordion', {
    contentActive: 'result__info--active',
    display: 'grid'
  }).accept(_components_visitor__WEBPACK_IMPORTED_MODULE_11__["default"].accordionParentMod).upgrade();

  // компонент добавления сотрудника
  new _components_add_user_component__WEBPACK_IMPORTED_MODULE_4__["default"]('#add-user');

  // компонент редактировать сотрудника
  new _components_filter_component__WEBPACK_IMPORTED_MODULE_5__["default"]('#filter');

  // компонент добавить / редактировать / продлить удостоверение
  new _components_edit_card_component__WEBPACK_IMPORTED_MODULE_8__["default"]('#edit-card');

  // компонент удалить сотрудника / удостоверение
  new _components_delete_user_or_card_component__WEBPACK_IMPORTED_MODULE_7__["default"]('#delete-user-or-card');

  // компонент фильтр
  new _components_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["default"]('#edit-user');

  // компонент добавить должность HSE
  new _components_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_9__["default"]('#add-hse');

  // компонент редактировать должность HSE
  new _components_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_9__["default"]('#edit-hse');

  // компонент Поиск
  new _components_search_component__WEBPACK_IMPORTED_MODULE_10__["default"]('#search');
});

/***/ }),

/***/ "./src/js/services/api.service.js":
/*!****************************************!*\
  !*** ./src/js/services/api.service.js ***!
  \****************************************/
/*! exports provided: apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiService", function() { return apiService; });
/**
 *  API Сервисы
 * */
class ApiService {
  /**
   * Конструктор
   * @param {string=} baseUrl  - url сервиса на который будем делать запросы
   */
  constructor() {
    let baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    this.url = baseUrl || `${location.origin}${location.pathname}`;
  }
}
const apiService = new ApiService();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map