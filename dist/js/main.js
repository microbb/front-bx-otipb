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

/***/ "./src/js/components/form-add-or-edit-card.component.js":
/*!**************************************************************!*\
  !*** ./src/js/components/form-add-or-edit-card.component.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormAddOrEditCardComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _core_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/support */ "./src/js/core/support.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/user/userCardInfo.template */ "./src/js/templates/user/userCardInfo.template.js");







/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormAddOrEditCardComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    document.addEventListener('click', e => {
      let target = e.target;
      if (target && target.classList.contains('js-edit-card-modal') || target.parentElement.classList.contains('js-edit-card-modal')) {
        e.preventDefault();
        if (target.parentElement.classList.contains('js-edit-card-modal')) {
          target = target.parentElement;
        }
        this.form.clear();
      }
      if (target && target.classList.contains('js-edit-card') || target.parentElement.classList.contains('js-edit-card')) {
        e.preventDefault();
        if (target.parentElement.classList.contains('js-edit-card')) {
          target = target.parentElement;
        }
        getData.call(this, target);
      }
    });
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      C_ATTESTATION_DATE: [],
      C_NEXT_ATTESTATION_DATE: [],
      C_CARD_NUMBER: []
    });
  }
}

/**
 * Обработчик заполнения формы
 * @return {void}
 */
async function getData(target) {
  let idTimeout;
  const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_4__["default"]({
    loading: 'Идет сбор данных, об удостоверение'
  });
  try {
    const formData = new FormData(),
      attDateInput = this.$el.querySelector('.js-edit-att-date'),
      nextAttDateInput = this.$el.querySelector('.js-edit-next-att-date'),
      cardNumberInput = this.$el.querySelector('.js-edit-card-number');
    formData.append('ID', target.dataset.id);
    idTimeout = setTimeout(() => {
      this.$el.append(loader.loading());
    }, 400);
    const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_3__["apiService"].useRequest('getCard', formData),
      result = JSON.parse(response.data.result);
    attDateInput.value = result.attestationDate;
    nextAttDateInput.value = result.nextAttestationDate;
    cardNumberInput.value = result.cardNumber;
  } catch (error) {
    if (error.status === 'error') {
      console.group('In file ApiService, in function useRequest, promise return reject');
      console.group('List of errors');
      error.errors.forEach(error => {
        console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
      });
      console.groupEnd();
      console.groupEnd();
    } else {
      console.group('In file FormAddOrEditCardComponent, in function getData error');
      console.error(`${error.stack}`);
      console.groupEnd();
    }
  } finally {
    clearTimeout(idTimeout);
    loader.removeLoader();
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    let loader;
    if (this.$el.getAttribute('action').slice(1) === 'addCard') {
      loader = new _loader_component__WEBPACK_IMPORTED_MODULE_4__["default"]({
        loading: 'Добавление удостоверения',
        success: 'Удостоверение добавлено',
        failure: 'Удостоверение не добавлено'
      });
    } else if (this.$el.getAttribute('action').slice(1) === 'editCard') {
      loader = new _loader_component__WEBPACK_IMPORTED_MODULE_4__["default"]({
        loading: 'Редактирование удостоверения',
        success: 'Удостоверение отредактировано',
        failure: 'Удостоверение не отредактировано'
      });
    }
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el);
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_3__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result);
      const htmlCardInfo = +result.customUser ? Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_5__["userCardInfoTemplate"])(result, {
        build: 1
      }) : +result.idMatrixWorks ? Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_5__["userCardInfoTemplate"])(result, {
        build: 2
      }) : Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_5__["userCardInfoTemplate"])(result, {
        build: 0
      });
      loader.success();
      setTimeout(() => {
        const parent = this.$el.closest('.result__row'),
          info = parent.querySelector('.result__info');
        info.innerHTML = htmlCardInfo;
      }, 900);
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormAddOrEditCardComponent, in function submitHandler error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        this.form.clear();
        this.$el.closest('.modal').style.display = 'none';
        _core_support__WEBPACK_IMPORTED_MODULE_2__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
        loader.removeLoader();
      }, 900);
    }
  }
}

/***/ }),

/***/ "./src/js/components/form-add-or-edit-hse.component.js":
/*!*************************************************************!*\
  !*** ./src/js/components/form-add-or-edit-hse.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormAddOrEditHseComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin/form-validator/validators */ "./src/js/plugin/form-validator/validators.js");
/* harmony import */ var _core_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/support */ "./src/js/core/support.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/user/userCardInfo.template */ "./src/js/templates/user/userCardInfo.template.js");
/* harmony import */ var _templates_workName_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/workName.template */ "./src/js/templates/workName.template.js");









/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormAddOrEditHseComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    if (this.$el.getAttribute('id') === 'edit-hse') {
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains('js-edit-hse-modal') || target.parentElement.classList.contains('js-edit-hse-modal')) {
          e.preventDefault();
          if (target.parentElement.classList.contains('js-edit-hse-modal')) {
            target = target.parentElement;
          }
          getData.call(this, target);
        }
      });
    }
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      ID_MATRIX_WORKS: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
  }
}

/**
 * Обработчик заполнения формы
 * @return {void}
 */
async function getData(target) {
  let idTimeout;
  const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_5__["default"]({
    loading: 'Идет сбор данных, о сотруднике'
  });
  try {
    const formData = new FormData(),
      options = this.$el.querySelectorAll('.dropdown__item');
    formData.append('ID', target.dataset.id);
    idTimeout = setTimeout(() => {
      this.$el.append(loader.loading());
    }, 400);
    const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].useRequest('getIdHse', formData);
    options.forEach(option => {
      if (+option.dataset.selectOption === +response.data.result) {
        option.click();
      }
    });
  } catch (error) {
    if (error.status === 'error') {
      console.group('In file ApiService, in function useRequest, promise return reject');
      console.group('List of errors');
      error.errors.forEach(error => {
        console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
      });
      console.groupEnd();
      console.groupEnd();
    } else {
      console.group('In file FormAddOrEditHseComponent, in function getData error');
      console.error(`${error.stack}`);
      console.groupEnd();
    }
  } finally {
    clearTimeout(idTimeout);
    loader.removeLoader();
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_5__["default"]({
      loading: 'Добавление должности',
      success: 'Должность добавлена',
      failure: 'Должность не добавлена'
    });
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el);
      this.$el.querySelector('button').blur();
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result);
      const htmlCardInfo = Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_6__["userCardInfoTemplate"])(result, {
          build: 2
        }),
        htmlUserWork = Object(_templates_workName_template__WEBPACK_IMPORTED_MODULE_7__["workNameTemplate"])(result.work);
      loader.success();
      setTimeout(() => {
        const parent = this.$el.closest('.result__row'),
          info = parent.querySelector('.result__info'),
          work = parent.querySelector('.js-matrix-work-hse');
        info.innerHTML = htmlCardInfo;
        work.classList.add('g-justify-items-left');
        work.setAttribute('title', result.work);
        work.innerHTML = htmlUserWork;
      }, 900);
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormAddOrEditHseComponent, in function submitHandler error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        this.$el.closest('.modal').style.display = 'none';
        _core_support__WEBPACK_IMPORTED_MODULE_3__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
        loader.removeLoader();
      }, 900);
    }
  }
}

/***/ }),

/***/ "./src/js/components/form-add-user.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/form-add-user.component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormAddUserComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin/form-validator/validators */ "./src/js/plugin/form-validator/validators.js");
/* harmony import */ var _plugin_chaining_select_in_form_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin/chaining-select-in-form.plugin */ "./src/js/plugin/chaining-select-in-form.plugin.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _templates_optionSelect_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/optionSelect.template */ "./src/js/templates/optionSelect.template.js");








/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormAddUserComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
    this.instanceDropDown = options.dropDown || {};
    this.partners = options.partners || [];
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      E_FIO: [],
      ID_DIVISION: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_DEPARTMENT: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_MATRIX_WORKS: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      E_EMPLOYEE_STATUS: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
    this.chainSelect = new _plugin_chaining_select_in_form_plugin__WEBPACK_IMPORTED_MODULE_3__["default"](this.$el, {
      callAction: 'getDepartments'
    }, {
      renderTemplate: _templates_optionSelect_template__WEBPACK_IMPORTED_MODULE_6__["optionSelectTemplate"]
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
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_5__["default"]({
      loading: 'Идет добавления сотрудника',
      success: 'Сотрудник добавлен',
      failure: 'Сотрудник не добавлен'
    });
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el),
        mainResult = this.partners.find(partner => partner.name === 'mainResult'),
        options = document.querySelector('.js-options-search');
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result);
      loader.success();
      this.partners.forEach(partner => partner.component.hide());
      mainResult.component.unshift(result).show();
      options.append(optionsUser(result.fio));
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormAddUserComponent error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        this.form.clear();
        this.instanceDropDown.reset(this.form.form);
        this.chainSelect.deleteOptions();
        loader.removeLoader();
      }, 900);
    }
  }
}

/**
 * Пункт в ФИО сотрудника
 * @return {HTMLElement}
 */
function optionsUser(fio) {
  let div = document.createElement('div'),
    text = document.createTextNode(fio);
  div.append(text);
  div.classList.add('dropdown__item');
  div.setAttribute('title', fio);
  div.style.display = 'none';
  return div;
}

/***/ }),

/***/ "./src/js/components/form-delete-user-or-card.component.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/form-delete-user-or-card.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormDeleteUserOrCardComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/user/userCardInfo.template */ "./src/js/templates/user/userCardInfo.template.js");






/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormDeleteUserOrCardComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
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
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_3__["default"]({
      loading: 'Удаление',
      success: 'Удален',
      failure: 'Неудача',
      activeClass: 'loader--delete'
    });
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el);
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_2__["apiService"].useRequest(action, formData);
      if (action === 'deleteUser') {
        loader.success();
        setTimeout(() => {
          const parent = this.$el.closest('.result__row');
          parent.remove();
        }, 900);
      }
      if (action === 'deleteCard') {
        const result = JSON.parse(response.data.result);
        const htmlCardInfo = +result.customUser ? Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_4__["userCardInfoTemplate"])(result, {
          build: 1
        }) : +result.idMatrixWorks ? Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_4__["userCardInfoTemplate"])(result, {
          build: 2
        }) : Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_4__["userCardInfoTemplate"])(result, {
          build: 0
        });
        loader.success();
        setTimeout(() => {
          const parent = this.$el.closest('.js-result-row'),
            info = parent.querySelector('.result__info');
          info.innerHTML = htmlCardInfo;
        }, 900);
      }
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormDeleteUserOrCardComponent, in function submitHandler error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        this.$el.closest('.modal').style.display = 'none';
        loader.removeLoader();
      }, 900);
    }
  }
}

/***/ }),

/***/ "./src/js/components/form-edit-user.component.js":
/*!*******************************************************!*\
  !*** ./src/js/components/form-edit-user.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormEditUserComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin/form-validator/validators */ "./src/js/plugin/form-validator/validators.js");
/* harmony import */ var _core_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/support */ "./src/js/core/support.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _templates_user_userInfo_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/user/userInfo.template */ "./src/js/templates/user/userInfo.template.js");
/* harmony import */ var _templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/user/userCardInfo.template */ "./src/js/templates/user/userCardInfo.template.js");
/* harmony import */ var _plugin_chaining_select_in_form_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugin/chaining-select-in-form.plugin */ "./src/js/plugin/chaining-select-in-form.plugin.js");
/* harmony import */ var _templates_optionSelect_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/optionSelect.template */ "./src/js/templates/optionSelect.template.js");











/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormEditUserComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
    this.instanceDropDown = options.dropDown || {};
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    document.addEventListener('click', e => {
      let target = e.target;
      if (target && target.classList.contains('js-edit-user-modal') || target.parentElement.classList.contains('js-edit-user-modal')) {
        e.preventDefault();
        if (target.parentElement.classList.contains('js-edit-user-modal')) {
          target = target.parentElement;
        }
        getData.call(this, target);
      }
    });
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      ID: [],
      E_FIO: [],
      ID_DIVISION: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_DEPARTMENT: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      ID_MATRIX_WORKS: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
      E_EMPLOYEE_STATUS: [_plugin_form_validator_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    });
    this.chainSelect = new _plugin_chaining_select_in_form_plugin__WEBPACK_IMPORTED_MODULE_8__["default"](this.$el, {
      callAction: 'getDepartments'
    }, {
      renderTemplate: _templates_optionSelect_template__WEBPACK_IMPORTED_MODULE_9__["optionSelectTemplate"]
    });
  }
}

/**
 * Обработчик заполнения формы
 * @return {void}
 */
async function getData(target) {
  let idTimeout;
  const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_5__["default"]({
    loading: 'Идет сбор данных, о сотруднике'
  });
  try {
    const formData = new FormData(),
      fioInput = this.$el.querySelector('.js-edit-fio'),
      divisionOptions = Array.from(this.$el.querySelectorAll('[data-sumbiot-selectA] .dropdown__item'));
    formData.append('ID', target.dataset.id);
    idTimeout = setTimeout(() => {
      this.$el.append(loader.loading());
    }, 400);
    const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].useRequest('getUserInfo', formData),
      result = JSON.parse(response.data.result),
      $divisionItem = divisionOptions.find(option => option.dataset.selectOption === result.ID_DIVISION);

    // заполняем выподающий список отделов
    await this.chainSelect.fillSelectB($divisionItem);

    // делаем активный дивизион
    this.instanceDropDown.select(this.chainSelect.$selectA, $divisionItem);

    // заполняем ФИО
    fioInput.value = result.fio;
    delete result.fio;
    delete result.ID_DIVISION;

    // делаем активный отдел / должность HSE / статус
    const optionsKey = Object.values(result),
      options = this.$el.querySelectorAll('.dropdown__item:not([data-sumbiot-selectA])');
    options.forEach(option => {
      if (optionsKey.includes(option.dataset.selectOption)) {
        option.click();
      }
    });
  } catch (error) {
    if (error.status === 'error') {
      console.group('In file ApiService, in function useRequest, promise return reject');
      console.group('List of errors');
      error.errors.forEach(error => {
        console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
      });
      console.groupEnd();
      console.groupEnd();
    } else {
      console.group('In file FormEditUserComponent, in function getData error');
      console.error(`${error.stack}`);
      console.groupEnd();
    }
  } finally {
    clearTimeout(idTimeout);
    loader.removeLoader();
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  if (this.form.isValid()) {
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_5__["default"]({
      loading: 'Идет добавления сотрудника',
      success: 'Сотрудник добавлен',
      failure: 'Сотрудник не добавлен'
    });
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el);
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result);
      const htmlUserInfo = Object(_templates_user_userInfo_template__WEBPACK_IMPORTED_MODULE_6__["userInfoTemplate"])(result, {
          build: 1
        }),
        htmlCardInfo = Object(_templates_user_userCardInfo_template__WEBPACK_IMPORTED_MODULE_7__["userCardInfoTemplate"])(result, {
          build: 1
        });
      loader.success();
      setTimeout(() => {
        const parent = this.$el.closest('.result__row'),
          user = parent.querySelector('.js-user-info'),
          info = parent.querySelector('.result__info');
        user.innerHTML = htmlUserInfo;
        info.innerHTML = htmlCardInfo;
      }, 900);
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormEditUserComponent, in function submitHandler error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        this.form.clear();
        this.instanceDropDown.reset(this.form.form);
        this.chainSelect.deleteOptions();
        this.$el.closest('.modal').style.display = 'none';
        _core_support__WEBPACK_IMPORTED_MODULE_3__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
        loader.removeLoader();
      }, 900);
    }
  }
}

/***/ }),

/***/ "./src/js/components/form-filter.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/form-filter.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormFilterComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");





/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormFilterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   * @param {Object=} [options.instanceDropDown] - экземпляр класса кастомных селектов
   * @param {Array=} [options.partners] - партнерские компоненты, которые помогают этому
   */
  constructor(id, options) {
    super(id, options);
    this.instanceDropDown = options.dropDown || {};
    this.partners = options.partners || [];
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.$el.addEventListener('reset', resetHandler.bind(this));
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
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
  e.target.querySelector('.form__button--submit').blur();
  if (this.form.isValid()) {
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_3__["default"]({
      loading: 'Идет фильтрация данных',
      failure: 'Ошибка'
    });
    try {
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el),
        filterResult = this.partners.find(partner => partner.name === 'filterResult');
      this.$el.append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_2__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result),
        count = result.length || 0;
      loader.success(`Найдено: ${count} совпадений`);
      this.partners.forEach(partner => partner.component.hide());
      filterResult.component.register(result).show();
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormFilterComponent error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        loader.removeLoader();
      }, 900);
    }
  }
}

/**
 * Обработчик сброса фильтра
 * @return {void}
 */
function resetHandler(e) {
  setTimeout(() => {
    e.target.querySelector('.form__button--reset_filter').blur();
  }, 150);
  this.instanceDropDown.reset(this.form.form);
  this.partners.forEach(partner => partner.component.hide());
  this.partners.find(partner => partner.name === 'mainResult').component.show();
}

/***/ }),

/***/ "./src/js/components/form-search.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/form-search.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSearchComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin/form-validator/form */ "./src/js/plugin/form-validator/form.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");





/**
 *  Компонент добавить кастомного сотрудника
 * */
class FormSearchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   * @param {Array=} [options.partners] - партнерские компоненты, которые помогают этому
   */
  constructor(id, options) {
    super(id, options);
    this.partners = options.partners || [];
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new _plugin_form_validator_form__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, {
      SEARCH: [],
      STATUS: []
    });
    getData.call(this);
  }
}

/**
 * Обработчик заполнения имен сотрудников для поиска
 * @return {void}
 */
async function getData() {
  try {
    const optionsWrap = this.$el.querySelector('.js-options-search');
    const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_2__["apiService"].getFio();
    if (Array.isArray(response)) {
      let html = response.map(name => {
        return `
          <div class="dropdown__item" title="${name}" style="display: none">
            ${name}
          </div>
        `;
      });
      optionsWrap.innerHTML = '';
      optionsWrap.insertAdjacentHTML('afterbegin', html.join(''));
    }
  } catch (error) {
    if (error.status === 'error') {
      console.group('In file ApiService, in function getUsers, promise return reject');
      console.group('List of errors');
      error.errors.forEach(error => {
        console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
      });
      console.groupEnd();
      console.groupEnd();
    } else {
      console.group('In file SearchComponent, in function getData error');
      console.error(`${error.stack}`);
      console.groupEnd();
    }
  }
}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {
  e.preventDefault();
  let btnSubmit = e.target.querySelector('.js-button-search-submit');
  btnSubmit.disabled = true;
  setTimeout(() => {
    btnSubmit.blur();
  }, 150);
  if (this.form.isValid()) {
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_3__["default"]({
      loading: 'Идет поиск сотрудника',
      failure: 'Ошибка',
      activeClass: 'loader--min-height'
    });
    try {
      var _this$$el$querySelect, _this$$el$querySelect2;
      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el),
        searchResult = this.partners.find(partner => partner.name === 'searchResult');
      (_this$$el$querySelect = this.$el.querySelector('.form__button--reset_search')) === null || _this$$el$querySelect === void 0 ? void 0 : _this$$el$querySelect.remove();
      this.partners.forEach(partner => partner.component.hide());
      document.querySelector('.result').append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_2__["apiService"].useRequest(action, formData),
        result = JSON.parse(response.data.result),
        count = result.length || 0,
        bntNext = nextBtn.call(this);
      loader.success(`Найдено: ${count} совпадений`);
      count ? searchResult.component.register(result).show() : searchResult.component.register(result, {
        bntNext
      }).show();
      (_this$$el$querySelect2 = this.$el.querySelector('.dropdown--input')) === null || _this$$el$querySelect2 === void 0 ? void 0 : _this$$el$querySelect2.append(resetRender.call(this));
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function useRequest, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file FormSearchComponent error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        loader.removeLoader();
        btnSubmit.disabled = false;
      }, 900);
    }
  }
}

/**
 * Обработчик сброса поиска
 * @return {HTMLElement}
 */
function resetRender() {
  // btnReset
  const btnReset = () => {
    let btn = document.createElement('button');
    btn.classList.add('form__button', 'form__button--reset_search');
    btn.setAttribute('type', 'reset');
    return btn;
  };

  // btnHandler
  const btnHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    this.form.clear();
    this.$el.querySelector('.dropdown__toggle').style.paddingRight = '';
    btn.removeEventListener('click', btnHandler);
    btn.remove();
    this.partners.forEach(partner => partner.component.hide());
    this.partners.find(partner => partner.name === 'mainResult').component.show();
  };
  const btn = btnReset();
  this.$el.querySelector('.dropdown__toggle').style.paddingRight = '30px';
  btn.addEventListener('click', btnHandler);
  return btn;
}

/**
 * Назад кнопка, если поиск не дал результатов
 * @return {HTMLElement}
 */
function nextBtn() {
  let btn = document.createElement('button'),
    text = document.createTextNode('на главную');
  btn.append(text);
  btn.classList.add('button', 'button--text');
  btn.style.marginLeft = '10px';
  btn.addEventListener('click', () => {
    var _this$$el$querySelect3;
    if (this.$el.querySelector('.dropdown__toggle')) this.$el.querySelector('.dropdown__toggle').style.paddingRight = '';
    (_this$$el$querySelect3 = this.$el.querySelector('.form__button--reset_search')) === null || _this$$el$querySelect3 === void 0 ? void 0 : _this$$el$querySelect3.remove();
    this.partners.forEach(partner => partner.component.hide());
    this.partners.find(partner => partner.name === 'mainResult').component.show();
  });
  return btn;
}

/***/ }),

/***/ "./src/js/components/loader.component.js":
/*!***********************************************!*\
  !*** ./src/js/components/loader.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoaderComponent; });
/**
 *  Погрузчик
 * */
class LoaderComponent {
  /**
   * Конструктор
   * @param {Object=} message - объект с настройками
   */
  constructor() {
    let {
      loading = 'Загрузка...',
      success = 'Успех',
      failure = 'Неудача',
      activeClass = ''
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.message = {
      loading: {
        title: loading,
        img: ''
      },
      success: {
        title: success,
        img: 'loader__img--ok'
      },
      failure: {
        title: failure,
        img: 'loader__img--error'
      }
    };
    this.activeClass = activeClass;
    this._init();
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el = document.createElement('div');
    this.$el.classList.add('loader');
    if (this.activeClass) {
      this.$el.classList.add(this.activeClass);
    }
    this.$el.innerHTML = `
      <div class="loader__img"></div>
      <p class="loader__massage">${this.message.loading.title}</p>
    `;
    this.$img = this.$el.querySelector('.loader__img');
    this.$massage = this.$el.querySelector('.loader__massage');
  }

  /**
   * Загрузка
   * @return {Element}
   */
  loading() {
    return this.$el;
  }

  /**
   * Успех
   * @return {void}
   */
  success() {
    let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.$img.classList.add(this.message.success.img);
    this.$massage.innerHTML = text || this.message.success.title;
  }

  /**
   * Неудача
   * @return {void}
   */
  failure() {
    this.$img.classList.add(this.message.failure.img);
    this.$massage.innerHTML = this.message.failure.title;
  }

  /**
   * Удалить загрузчик
   * @return {void}
   */
  removeLoader() {
    this.$el.remove();
  }
}

/***/ }),

/***/ "./src/js/components/result-filter.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/result-filter.component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultFilterComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/sumbiot/modules/pagination/components/pagination */ "./src/js/library/sumbiot/modules/pagination/components/pagination.js");
/* harmony import */ var _templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/user/userMain.template */ "./src/js/templates/user/userMain.template.js");
/* harmony import */ var _templates_user_userPlug_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/user/userPlug.template */ "./src/js/templates/user/userPlug.template.js");





/**
 *  Компонент выводит результат работы компонента фильтр
 * */
class ResultFilterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
    this.$pasteInElement = this.$el.querySelector('.result__inner');
    this.data = null;
  }

  /**
   * Зарегистрировать данные для показа
   * @param {Array} result - данные для показа
   * @param {Object=} options - дополнительные данные и настройки
   * @return {this}
   */
  register(result) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.data = {
      result,
      ...options
    };
    return this;
  }

  /**
   * Показать компонент
   * @return {void}
   */
  show() {
    this.$el.style.display = 'block';
    this._onShow();
  }

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow() {
    if (this.data) {
      if (Array.isArray(this.data.result) && this.data.result.length) {
        let html = this.data.result.map(user => {
          if (+user.customUser) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 1
            });
          } else if (+user.idMatrixWorks) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 2
            });
          } else {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 0
            });
          }
        });
        new _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, this.$pasteInElement, html);
      } else {
        let html = Object(_templates_user_userPlug_template__WEBPACK_IMPORTED_MODULE_3__["userPlugTemplate"])(`Найдено: 0 совпадений`);
        this.$pasteInElement.insertAdjacentHTML('afterbegin', html);
      }
      this.data = null;
    }
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
  _onHide() {
    var _this$$el$querySelect;
    this.$pasteInElement.innerHTML = '';
    (_this$$el$querySelect = this.$el.querySelector('.pagination')) === null || _this$$el$querySelect === void 0 ? void 0 : _this$$el$querySelect.remove();
  }
}

/***/ }),

/***/ "./src/js/components/result-main.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/result-main.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultMainComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component */ "./src/js/components/loader.component.js");
/* harmony import */ var _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/sumbiot/modules/pagination/components/pagination */ "./src/js/library/sumbiot/modules/pagination/components/pagination.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");
/* harmony import */ var _templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/user/userMain.template */ "./src/js/templates/user/userMain.template.js");






/**
 *  Компонент вывод все сотрудников
 * */
class ResultMainComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
    this.$pasteInElement = this.$el.querySelector('.result__inner');
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.getAllUsers();
  }

  /**
   * Отрисовать всех сотрудниуов на главной страницы ком
   * @return {void}
   */
  async getAllUsers() {
    const loader = new _loader_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
      loading: 'Приложение загружается, подождите',
      success: 'Приложение загружено, приятной работы',
      failure: 'Приложение не загружено, что то пошло не так',
      activeClass: 'loader--min-height'
    });
    let btns = document.querySelectorAll('.top-panel__btn, .form__button');
    btns.forEach(btn => {
      btn.disabled = true;
    });
    try {
      document.querySelector('.result').append(loader.loading());
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_3__["apiService"].getUsers();
      if (Array.isArray(response) && response.length) {
        this.html = response.map(user => {
          if (+user.customUser) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_4__["userMainTemplate"])(user, {
              build: 1
            });
          } else if (+user.idMatrixWorks) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_4__["userMainTemplate"])(user, {
              build: 2
            });
          } else {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_4__["userMainTemplate"])(user, {
              build: 0
            });
          }
        });
        loader.success();
        setTimeout(() => {
          this.pagination = new _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_2__["default"](this.$el, this.$pasteInElement, this.html);
        }, 950);
      } else {
        console.error('In file ResultMainComponent, in function getAllUsers, response is either not an array or an empty array');
      }
    } catch (error) {
      loader.failure();
      if (error.status === 'error') {
        console.group('In file ApiService, in function getUsers, promise return reject');
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file ResultMainComponent, in function getAllUsers error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    } finally {
      setTimeout(() => {
        loader.removeLoader();
        btns.forEach(btn => {
          btn.disabled = false;
        });
      }, 900);
    }
  }

  /**
   * добавить сотрудника в начало
   * @param {Object} user - сотрудник
   * @return {this}
   */
  unshift(user) {
    if (user) {
      let html = Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_4__["userMainTemplate"])(user, {
        build: 1
      });
      if (this.html) {
        this.html.unshift(html);
        this.pagination.showPage(1);
      } else {
        this.$pasteInElement.insertAdjacentHTML('afterbegin', html);
      }
    }
    return this;
  }
}

/***/ }),

/***/ "./src/js/components/result-search.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/result-search.component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultSearchComponent; });
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");
/* harmony import */ var _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/sumbiot/modules/pagination/components/pagination */ "./src/js/library/sumbiot/modules/pagination/components/pagination.js");
/* harmony import */ var _templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/user/userMain.template */ "./src/js/templates/user/userMain.template.js");
/* harmony import */ var _templates_user_userPlug_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/user/userPlug.template */ "./src/js/templates/user/userPlug.template.js");





/**
 *  Компонент выводит результат работы компонента фильтр
 * */
class ResultSearchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
    this.$pasteInElement = this.$el.querySelector('.result__inner');
  }

  /**
   * Зарегистрировать данные для показа
   * @param {Array} result - данные для показа
   * @param {Object=} options - дополнительные данные и настройки
   * @return {this}
   */
  register(result) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.data = {
      result,
      ...options
    };
    return this;
  }

  /**
   * Показать компонент
   * @param {Array} result - какой результат показать
   * @param {Object=} options - настройки
   * @return {void}
   */
  show() {
    this.$el.style.display = 'block';
    this._onShow();
  }

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow() {
    if (this.data) {
      if (Array.isArray(this.data.result) && this.data.result.length) {
        let html = this.data.result.map(user => {
          if (+user.customUser) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 1
            });
          } else if (+user.idMatrixWorks) {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 2
            });
          } else {
            return Object(_templates_user_userMain_template__WEBPACK_IMPORTED_MODULE_2__["userMainTemplate"])(user, {
              build: 0
            });
          }
        });
        setTimeout(() => {
          new _library_sumbiot_modules_pagination_components_pagination__WEBPACK_IMPORTED_MODULE_1__["default"](this.$el, this.$pasteInElement, html);
        }, 950);
      } else {
        let html = Object(_templates_user_userPlug_template__WEBPACK_IMPORTED_MODULE_3__["userPlugTemplate"])(`Ваш запрос не дал результатов`);
        setTimeout(() => {
          var _this$$el$querySelect;
          this.$pasteInElement.insertAdjacentHTML('afterbegin', html);
          (_this$$el$querySelect = this.$el.querySelector('.text-align-center')) === null || _this$$el$querySelect === void 0 ? void 0 : _this$$el$querySelect.append(this.data.bntNext);
        }, 950);
      }
      setTimeout(() => {
        this.data = null;
      }, 1000);
    }
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
  _onHide() {
    var _this$$el$querySelect2;
    this.$pasteInElement.innerHTML = '';
    (_this$$el$querySelect2 = this.$el.querySelector('.pagination')) === null || _this$$el$querySelect2 === void 0 ? void 0 : _this$$el$querySelect2.remove();
  }
}

/***/ }),

/***/ "./src/js/components/visitor.pattern.js":
/*!**********************************************!*\
  !*** ./src/js/components/visitor.pattern.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisitorPattern; });
/* harmony import */ var _core_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/support */ "./src/js/core/support.js");


/**
 *  Добавляет новую функциональность уже существующим классам, не изменяя исходный код класса
 * */
class VisitorPattern {
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

      // добавляет id
      const addUserId = target => {
        if (target.dataset.idUser) {
          const input = document.createElement('input');
          input.classList.add('js-input-user-id');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', 'ID_USER');
          input.setAttribute('value', target.dataset.idUser);
          this.modal.querySelector('form').prepend(input);
        }
        if (target.dataset.customUser) {
          const input = document.createElement('input');
          input.classList.add('js-input-custom-user');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', 'CUSTOM_USER');
          input.setAttribute('value', target.dataset.customUser);
          this.modal.querySelector('form').prepend(input);
        }
      };

      // удаляет id
      const deleteUserId = () => {
        const inputs = this.modal.querySelectorAll('input');
        for (let input of inputs) {
          if (input.classList.contains('js-input-user-id') || input.classList.contains('js-input-custom-user')) input.remove();
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

      // по клавиши Esc
      window.addEventListener("keydown", e => {
        if (e.key === "Escape" || e.keyCode === 27) {
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
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
        if (target && target.classList.contains(this._trigger.slice(1)) || target && target.parentElement.classList.contains(this._trigger.slice(1))) {

          // неиспользуется
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
        if (target.dataset.customUser) {
          const input = document.createElement('input');
          input.classList.add('js-input-custom-user');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', 'CUSTOM_USER');
          input.setAttribute('value', target.dataset.customUser);
          this.modal.querySelector('form').prepend(input);
        }
      };

      // удаляет user id
      const deleteUserId = () => {
        const inputs = this.modal.querySelectorAll('input');
        for (let input of inputs) {
          if (input.classList.contains('js-input-user-id') || input.classList.contains('js-input-custom-user')) input.remove();
        }
      };
      document.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1))) {
          if (target.parentElement.classList.contains(this._trigger.slice(1))) {
            target = target.parentElement;
          }
          _core_support__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass('.js-wrapper-modal', ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265']);
          deleteUserId();
          editAction(target);
          addUserId(target);
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
    this.$el.style.display = 'none';
    this._onHide(); // -> после скрытия компонента вызываем метод
  }

  /**
   * Показать компонент
   * @return {void}
   */
  show() {
    this.$el.style.display = 'block';
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
      dropdownOptionsWrapperSelector = '.dropdown-sumbiot__options',
      // - выпадающий список
      display = 'block' // - тип отображения элемента
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this._dropdownSelector = dropdownSelector;
    this._dropdownToggleSelector = dropdownToggleSelector;
    this._listDropdowns = document.querySelectorAll(dropdownSelector);
    this._listDropdownsOptions = document.querySelectorAll(dropdownOptionsWrapperSelector);
    this._display = display;
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
    this._target.nextElementSibling.style.display = this._target.nextElementSibling.style.display === 'none' ? this._display : 'none';
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/dropdown/components/dropdownInput.js":
/*!*****************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/dropdown/components/dropdownInput.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownInput; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./src/js/library/sumbiot/modules/dropdown/components/dropdown.js");


/**
 *  Выподающий список Input
 * */
class DropdownInput extends _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} dropdownSelector - селектор выподающего списка.
   * @param {Object=} options         - конфигурация.
   */
  constructor(dropdownSelector) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(dropdownSelector, options);
    this._dropdownOptionSelector = options.dropdownOptionSelector || '[data-input-search-option]'; // - пункты выподающего списка
  }

  /**
   * Инициализация выподающего списка
   * @return {void}
   */
  _init() {
    this.hideAllDropdowns();
    this._searchHandler();
  }

  /**
   * Скрывает все открытые выподающие списки
   * @return {void}
   */
  hideAllDropdowns() {
    this._listDropdownsOptions.forEach(dropdownOpen => {
      dropdownOpen.style.display = 'none';
    });
  }

  /**
   * Обработчик событий поиска
   * @return {void}
   */
  _searchHandler() {
    this._listDropdowns.forEach(dropdown => {
      dropdown.addEventListener('input', e => {
        if (e.target && e.target.classList.contains(this._dropdownToggleSelector.slice(1))) {
          e.preventDefault();
          this._showOptionsWrapper(e.target);
        }
      });
      dropdown.addEventListener('click', e => {
        if (e.target && e.target.matches(this._dropdownOptionSelector)) {
          e.preventDefault();
          this._activeInput(dropdown, e.target);
        }
      });
    });
    document.addEventListener('click', e => {
      if (e.target && !e.target.closest(this._dropdownSelector)) {
        this.hideAllDropdowns();
      }
    }, true);
  }

  /**
   * Открыть выподающие меню
   * @param {HTMLInputElement} input - input для ввода текста
   * @return {void}
   */
  _showOptionsWrapper(input) {
    let flag = false,
      valueInput = input.value.trim();
    if (valueInput && valueInput.length > 2) {
      let options = Array.from(document.querySelectorAll(`${this._dropdownSelector} ${this._dropdownOptionSelector}`));
      options.forEach(option => {
        if (option.innerText.toUpperCase().includes(valueInput.toUpperCase())) {
          option.style.display = this._display;
          flag = true;
        } else {
          option.style.display = 'none';
        }
      });
      flag ? input.nextElementSibling.style.display = this._display : input.nextElementSibling.style.display = 'none';
    } else {
      input.nextElementSibling.style.display = 'none';
    }
  }

  /**
   * Выбирает активный пункт
   * @param {HTMLElement} dropdown - блок выпадающего списка
   * @param {HTMLElement} optionActive - пункт выпадающего списка
   * @return {void}
   */
  _activeInput(dropdown, optionActive) {
    const pasteInOption = dropdown.querySelector(this._dropdownToggleSelector);
    pasteInOption.value = optionActive.innerText;
    this.hideAllDropdowns();
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
          this.select(dropdown, e.target);
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
   * @param {HTMLElement} dropdown - блок выпадающего списка
   * @param {HTMLElement} optionActive - пункт выпадающего списка
   * @return {void}
   */
  select(dropdown, optionActive) {
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
    } else {
      showOption.removeAttribute('title');
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
      modalGroup = '[data-sumbiot-modal]',
      // - группирует модалки в группы
      closeSelector = '[data-sumbiot-modal-close]',
      // - селектор который закрывает модальное окно.
      closeClickOverlay = true // - будет ли закрываться окно по клику по подложки
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this._trigger = triggerSelector;
    this.modal = document.querySelector(modalSelector || document.querySelector(triggerSelector).dataset.sumbiotTarget);
    this._close = this.modal.querySelector(closeSelector);
    this._modalGroupSelector = modalGroup;
    this._windows = document.querySelectorAll(modalGroup);
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
      if (target && target.classList.contains(this._trigger.slice(1)) || target && target.parentElement.classList.contains(this._trigger.slice(1))) {
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
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.keyCode === 27) {
        this._closeModalEscape(e);
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
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModalEscape(e) {
    document.querySelectorAll(this._modalGroupSelector).forEach(modals => {
      if (modals.style.display === 'block') {
        modals.style.display = "none";
      }
    });
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
      } else if (target && target.parentElement.classList.contains(this._trigger.slice(1))) {
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

/***/ "./src/js/library/sumbiot/modules/pagination/components/pagination.js":
/*!****************************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/pagination/components/pagination.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _paginationCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paginationCore */ "./src/js/library/sumbiot/modules/pagination/paginationCore.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 *  Постраничная навигация
 * */
class Pagination extends _paginationCore__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string | HTMLElement} paginationInSelector - куда на странице вставить навигацию.
   * @param {string | HTMLElement} resultInSelector - куда на странице вставить результат выборку.
   * @param {Array} listElements - список элементов.
   * @param {Object=} options - конфигурация.
   * @param {number} [options.perpage] - количество элементов на странице
   * @param {number} [options.page] - с какой страницы начинать (активная)
   */
  constructor(paginationInSelector, resultInSelector, listElements) {
    let {
      perpage = 25,
      page = 1
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    _defineProperty(this, "_switchingHandler", e => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains('pagination__btn') || target && target.parentElement.classList.contains('pagination__btn')) {
        if (target.parentElement.classList.contains('pagination__btn')) {
          target = target.parentElement;
        }
        this._switchPage(target);
      }
    });
    this.$paginationInElement = paginationInSelector.tagName ? paginationInSelector : document.querySelector(paginationInSelector);
    this.$resultInElement = resultInSelector.tagName ? resultInSelector : document.querySelector(resultInSelector);
    this._listElements = listElements;
    this._countListElements = this._listElements.length || 0; // сколько всего элементов

    this._perpage = perpage; // сколько показывать на странице

    this._pagesCount = Math.ceil(this._countListElements / this._perpage) || 1; // кол-во страниц

    this._page = page; // активная страница

    this._init();
  }

  /**
   * Инициализация постраничной навигация
   * @return {void}
   */
  _init() {
    this._switchPage();
  }

  /**
   * Обработчик события клика по элементу который переключает страницы
   * @return {void}
   */

  /**
   * Переключить страницу
   * @return {void}
   */
  _switchPage() {
    let btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (btn) {
      this._page = +btn.dataset.page;
    }
    let start = (this._page - 1) * this._perpage,
      end = start + this._perpage;
    let resSlice = this._listElements.slice(start, end);
    this.$resultInElement.innerHTML = '';
    this.$resultInElement.insertAdjacentHTML('beforeend', resSlice.join(''));
    this._removeEventListenerClick();
    if (this._pagesCount > 1) {
      this._paginationCreate();
    }
  }

  /**
   * Показать нужную страницу
   * @param {number} number - номер страницы которую надо показать
   * @return {void}
   */
  showPage() {
    let number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this._countListElements = this._listElements.length || 0; // сколько всего элементов
    this._pagesCount = Math.ceil(this._countListElements / this._perpage) || 0; // кол-во страниц

    this._pagesCount < number || number < 1 ? this._page = 1 : this._page = number;
    this._switchPage();
  }

  /**
   * Создаем Html код для постраничной навигации и помещаем на страницу
   * @return {void}
   */
  _paginationCreate() {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    let startPage = this._page > 3 ? `<button type="button" class="pagination__btn" data-page="1">1</button>` : '',
      endPage = this._page < this._pagesCount - 2 ? `<button type="button" class="pagination__btn" data-page="${this._pagesCount}">${this._pagesCount}</button>` : '',
      page4left = this._page - 4 > 1 ? `<span class="pagination__plug">...</span>` : '',
      page3left = this._page - 3 > 1 ? `<button type="button" class="pagination__btn" data-page="${this._page - 3}">${this._page - 3}</button>` : '',
      page2left = this._page - 2 > 0 ? `<button type="button" class="pagination__btn" data-page="${this._page - 2}">${this._page - 2}</button>` : '',
      page1left = this._page - 1 > 0 ? `<button type="button" class="pagination__btn" data-page="${this._page - 1}">${this._page - 1}</button>` : '',
      page4right = this._page + 4 < this._pagesCount ? `<span class="pagination__plug">...</span>` : '',
      page3right = this._page + 3 < this._pagesCount ? `<button type="button" class="pagination__btn" data-page="${this._page + 3}">${this._page + 3}</button>` : '',
      page2right = this._page + 2 <= this._pagesCount ? `<button type="button" class="pagination__btn" data-page="${this._page + 2}">${this._page + 2}</button>` : '',
      page1right = this._page + 1 <= this._pagesCount ? `<button type="button" class="pagination__btn" data-page="${this._page + 1}">${this._page + 1}</button>` : '',
      pageActive = `<button type="button" class="pagination__btn pagination__btn--active">${this._page}</button>`;
    pagination.innerHTML = startPage + page4left + page3left + page2left + page1left + pageActive + page1right + page2right + page3right + page4right + endPage;
    this.$paginationInElement.append(pagination);
    this._addEventListenerClick();
  }

  /**
   * Добавить слушатель
   * @return {void}
   */
  _addEventListenerClick() {
    this.$paginationInElement.querySelectorAll('.pagination__btn').forEach(btn => {
      btn.addEventListener('click', this._switchingHandler);
    });
  }

  /**
   * Удалить слушатель
   * @return {void}
   */
  _removeEventListenerClick() {
    var _this$$paginationInEl;
    this.$paginationInElement.querySelectorAll('.pagination__btn').forEach(btn => {
      btn.removeEventListener('click', this._switchingHandler);
    });
    (_this$$paginationInEl = this.$paginationInElement.querySelector('.pagination')) === null || _this$$paginationInEl === void 0 ? void 0 : _this$$paginationInEl.remove();
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/pagination/paginationCore.js":
/*!*********************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/pagination/paginationCore.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginationCore; });
/**
 *  Постраничная навигация Ядро
 * */
class PaginationCore {
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
/* harmony import */ var _library_sumbiot_modules_dropdown_components_dropdownInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/sumbiot/modules/dropdown/components/dropdownInput */ "./src/js/library/sumbiot/modules/dropdown/components/dropdownInput.js");
/* harmony import */ var _components_form_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-add-user.component */ "./src/js/components/form-add-user.component.js");
/* harmony import */ var _components_form_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-filter.component */ "./src/js/components/form-filter.component.js");
/* harmony import */ var _components_form_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-edit-user.component */ "./src/js/components/form-edit-user.component.js");
/* harmony import */ var _components_form_delete_user_or_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form-delete-user-or-card.component */ "./src/js/components/form-delete-user-or-card.component.js");
/* harmony import */ var _components_form_add_or_edit_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-add-or-edit-card.component */ "./src/js/components/form-add-or-edit-card.component.js");
/* harmony import */ var _components_form_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-add-or-edit-hse.component */ "./src/js/components/form-add-or-edit-hse.component.js");
/* harmony import */ var _components_form_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-search.component */ "./src/js/components/form-search.component.js");
/* harmony import */ var _components_result_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/result-filter.component */ "./src/js/components/result-filter.component.js");
/* harmony import */ var _components_result_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/result-main.component */ "./src/js/components/result-main.component.js");
/* harmony import */ var _components_result_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/result-search.component */ "./src/js/components/result-search.component.js");
/* harmony import */ var _plugin_stretch_in_select_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugin/stretch-in-select.plugin */ "./src/js/plugin/stretch-in-select.plugin.js");
/* harmony import */ var _plugin_search_in_select_plugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugin/search-in-select.plugin */ "./src/js/plugin/search-in-select.plugin.js");
/* harmony import */ var _components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/visitor.pattern */ "./src/js/components/visitor.pattern.js");


















window.addEventListener('DOMContentLoaded', () => {
  // window.BX = {
  //   TemplateFolder: '',
  //   message: function (path) {
  //     return this[path]
  //   }
  // }

  // выподающий список select
  const dropDownSelect = new _library_sumbiot_modules_dropdown_components_dropdownSelect__WEBPACK_IMPORTED_MODULE_3__["default"]('.dropdown--select', {
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown--select .dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  });
  dropDownSelect.accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].positionMod).upgrade();

  // выподающий список поиск
  new _library_sumbiot_modules_dropdown_components_dropdownInput__WEBPACK_IMPORTED_MODULE_4__["default"]('.dropdown--input', {
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown--input .dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  });

  // панель которая регулирует ширина выподающего списка
  new _plugin_stretch_in_select_plugin__WEBPACK_IMPORTED_MODULE_15__["default"]('.js-option-panel', '.dropdown__options', 'dropdown__options--stretch');

  // панель которая реализует поиск выподающего списка
  new _plugin_search_in_select_plugin__WEBPACK_IMPORTED_MODULE_16__["default"]('.js-option-panel', '.dropdown__search-box');

  // модалка фильтр
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-filter-modal', {
    modalGroup: '[data-sumbiot-modal-top]',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].modalsStandardMod).upgrade();
  // модалка добавить сутрудника
  new _library_sumbiot_modules_modals_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-add-user-modal', {
    modalGroup: '[data-sumbiot-modal-top]',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].modalsStandardMod).upgrade();

  // модалка редактировать сотрудника
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-user-modal', {
    modalSelector: '#edit-user-modal',
    modalWrapper: '.js-wrapper-modal',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].editUserMod).upgrade();

  // модалка удалить сотрудника / удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-delete-user-and-card-modal', {
    modalSelector: '#delete-user-or-card-modal',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].modalsUnityDeleteMod).upgrade();

  // модалка добавить / редактировать / продлить удостоверение
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-card-modal', {
    modalSelector: '#edit-card-modal',
    modalWrapper: '.js-wrapper-modal',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].modalsUnityMod).upgrade();

  // модалка добавление HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-add-hse-modal', {
    modalSelector: '#add-hse-modal',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].addHseMod).upgrade(dropDownSelect);

  // модалка редактировать HSE
  new _library_sumbiot_modules_modals_components_modalDynamics__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-edit-hse-modal', {
    modalSelector: '#edit-hse-modal',
    modalWrapper: '.js-wrapper-modal',
    closeClickOverlay: false
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].editHseMod).upgrade();

  // аккардион
  new _library_sumbiot_modules_accordion_components_accordion__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-accordion', {
    contentActive: 'result__info--active',
    display: 'grid'
  }).accept(_components_visitor_pattern__WEBPACK_IMPORTED_MODULE_17__["default"].accordionParentMod).upgrade();

  // компонент вывод всех сотрудников на главной
  const mainResult = new _components_result_main_component__WEBPACK_IMPORTED_MODULE_13__["default"]('#main-result');
  // компонент вывод результатов работы фильтра
  const filterResult = new _components_result_filter_component__WEBPACK_IMPORTED_MODULE_12__["default"]('#filter-result');
  // компонент вывод результатов работы поиска
  const searchResult = new _components_result_search_component__WEBPACK_IMPORTED_MODULE_14__["default"]('#search-result');

  // компонент добавления сотрудника
  new _components_form_add_user_component__WEBPACK_IMPORTED_MODULE_5__["default"]('#add-user', {
    dropDown: dropDownSelect,
    partners: [{
      name: 'mainResult',
      component: mainResult
    }, {
      name: 'filterResult',
      component: filterResult
    }, {
      name: 'searchResult',
      component: searchResult
    }]
  });
  // компонент редактировать сотрудника
  new _components_form_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["default"]('#edit-user', {
    dropDown: dropDownSelect
  });

  // компонент добавить / редактировать / продлить удостоверение
  new _components_form_add_or_edit_card_component__WEBPACK_IMPORTED_MODULE_9__["default"]('#edit-card');

  // компонент удалить сотрудника / удостоверение
  new _components_form_delete_user_or_card_component__WEBPACK_IMPORTED_MODULE_8__["default"]('#delete-user-or-card');

  // компонент добавить должность HSE
  new _components_form_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_10__["default"]('#add-hse');

  // компонент редактировать должность HSE
  new _components_form_add_or_edit_hse_component__WEBPACK_IMPORTED_MODULE_10__["default"]('#edit-hse');

  // компонент фильтр
  new _components_form_filter_component__WEBPACK_IMPORTED_MODULE_6__["default"]('#filter', {
    dropDown: dropDownSelect,
    partners: [{
      name: 'mainResult',
      component: mainResult
    }, {
      name: 'filterResult',
      component: filterResult
    }, {
      name: 'searchResult',
      component: searchResult
    }]
  });

  // компонент Поиск
  new _components_form_search_component__WEBPACK_IMPORTED_MODULE_11__["default"]('#search-otipb', {
    partners: [{
      name: 'mainResult',
      component: mainResult
    }, {
      name: 'filterResult',
      component: filterResult
    }, {
      name: 'searchResult',
      component: searchResult
    }]
  });
});

/***/ }),

/***/ "./src/js/plugin/chaining-select-in-form.plugin.js":
/*!*********************************************************!*\
  !*** ./src/js/plugin/chaining-select-in-form.plugin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChainingSelectInFormPlugin; });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api.service */ "./src/js/services/api.service.js");


/**
 *  От выбора в A(первом селект), зависит наполнения Б(второго селекте)
 * */
class ChainingSelectInFormPlugin {
  /**
   * Конструктор
   * @param {string | Element} form  - форма в корорый надо объединить два выподающий списка.
   * @param {Object} selectA         - выподающий спосок A
   * @param {string} [selectA.selectorA] - селектор выподающего списка А
   * @param {string} [selectA.selectATriggerSelector] - сетектор для запуска действия в выподающим списке А
   * @param {string} [selectA.callAction] - обработчик который вызывает выподающий спосок A для получения данных, которые потом отрисуем в выподающий списки В
   * @param {Object} selectB         - выподающий спосок В
   * @param {string} [selectB.selectorB]  -  селектор выподающего списка В
   * @param {Object} [selectB.resetParams]  - элемента для сброса
   * @param {string} [selectB.resetParams.activeOption]  - активный пункт
   * @param {string} [selectB.resetParams.options]  - пункты списка
   * @param {string} [selectB.resetParams.input]  - input для отправки на сервер
   * @param {Function} [selectB.renderTemplate]  - шаблон который принемает данные из списка A, с создает html верстку для заполнения списка B
   * @param {string} [selectB.selectorWherePasteOptions]  - шаблон который принемает данные из списка A, с создает html верстку для заполнения списка B
   */
  constructor(form) {
    let {
      selectorA = '[data-sumbiot-selectA]',
      selectATriggerSelector = '.dropdown__item',
      callAction
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      selectorB = '[data-sumbiot-selectB]',
      resetParams = {
        activeOption: '.js-dropdown__toggle',
        options: '.dropdown__item',
        input: '.sumbiot-input-select'
      },
      renderTemplate,
      selectorWherePasteOptions = '[data-sumbiot-selectB-paste]'
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.$form = form.tagName ? form : document.querySelector(form);
    this.$selectA = this.$form.querySelector(selectorA);
    this.selectATriggerSelector = selectATriggerSelector;
    this.callActionA = callAction;
    this.$selectB = this.$form.querySelector(selectorB);
    this.$pasteOptions = this.$selectB.querySelector(selectorWherePasteOptions);
    this.resetParamsB = resetParams;
    this.renderTemplateB = renderTemplate;
    this._init();
  }

  /**
   * Инициализация плагина
   * @return {void}
   */
  _init() {
    this._handlerEvent();
  }

  /**
   * Обработчик событий
   * @return {void}
   */
  _handlerEvent() {
    this.$selectA.addEventListener('click', e => {
      let target = e.target;
      if (target && target.classList.contains(this.selectATriggerSelector.slice(1)) || target && target.parentElement.classList.contains(this.selectATriggerSelector.slice(1))) {
        e.preventDefault();
        if (target.parentElement.classList.contains(this.selectATriggerSelector.slice(1))) {
          target = target.parentElement;
        }
        this.fillSelectB(target);
      }
    });
  }

  /**
   * Заполнить выподающий список B
   * @param {HTMLElement} option - пункт списка в А селекте
   * @return {void}
   */
  async fillSelectB(option) {
    try {
      let idSelectA = option.dataset.selectOption,
        formData = new FormData();
      formData.append('id', idSelectA);
      this._resetSelectB();
      const response = await _services_api_service__WEBPACK_IMPORTED_MODULE_0__["apiService"].useRequest(this.callActionA, formData),
        result = JSON.parse(response.data.result);
      if (Array.isArray(result) && result.length) {
        let html = result.map(option => {
          return this.renderTemplateB(option);
        });
        this.$pasteOptions.insertAdjacentHTML('afterbegin', html.join(''));
      } else {
        console.error('In file ChainingSelectInFormPlugin, in function fillSelectB, response is either not an array or an empty array');
      }
    } catch (error) {
      if (error.status === 'error') {
        console.group(`In file ApiService, in function , ${this.callActionA} promise return reject`);
        console.group('List of errors');
        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`);
        });
        console.groupEnd();
        console.groupEnd();
      } else {
        console.group('In file ChainingSelectInFormPlugin, in function fillSelectB error');
        console.error(`${error.stack}`);
        console.groupEnd();
      }
    }
  }

  /**
   * Сброс параметров у выподающий списока B
   * @return {void}
   */
  _resetSelectB() {
    let toggle = this.$selectB.querySelector(this.resetParamsB.activeOption),
      options = this.$selectB.querySelectorAll(this.resetParamsB.options),
      input = this.$selectB.parentElement.querySelector(this.resetParamsB.input);

    // активный пункт
    toggle.innerText = '';
    toggle.removeAttribute('title');

    // пункты списка
    options.forEach(option => {
      option.remove();
    });

    // input
    input.setAttribute('value', '');
  }

  /**
   * Удаление пунктов выподающий списока B
   * @return {void}
   */
  deleteOptions() {
    let options = this.$selectB.querySelectorAll(this.resetParamsB.options);

    // пункты списка
    options.forEach(option => {
      option.remove();
    });
  }
}

/***/ }),

/***/ "./src/js/plugin/form-validator/form.js":
/*!**********************************************!*\
  !*** ./src/js/plugin/form-validator/form.js ***!
  \**********************************************/
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

/***/ "./src/js/plugin/form-validator/validators.js":
/*!****************************************************!*\
  !*** ./src/js/plugin/form-validator/validators.js ***!
  \****************************************************/
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

/***/ "./src/js/plugin/search-in-select.plugin.js":
/*!**************************************************!*\
  !*** ./src/js/plugin/search-in-select.plugin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInSelectPlugin; });
/**
 *  Панель для выпадающего списка, для поиска по списку
 * */
class SearchInSelectPlugin {
  /**
   * Конструктор
   * @param {string} panelsSelector   - селектор панелей для выпадающего списка.
   * @param {string} searchSelector   - селектор блока поиска.
   */
  constructor(panelsSelector, searchSelector) {
    this._panelsElements = document.querySelectorAll(panelsSelector);
    this._searchSelector = searchSelector;
    this._init();
  }

  /**
   * Инициализация
   * @return {void}
   */
  _init() {
    this._searchHandler();
  }

  /**
   * Обработчик событий по поиску
   * @return {void}
   */
  _searchHandler() {
    this._panelsElements.forEach(panel => {
      let parentElement = panel.parentElement,
        searchBtn = panel.querySelector('.option-panel__item--search'),
        searchInput = parentElement.querySelector('.dropdown__search'),
        resetBtn = parentElement.querySelector('.dropdown__search-reset');
      searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', e => {
        e.preventDefault();
        this._toggleSearch(parentElement, searchInput);
      });
      searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', e => {
        e.preventDefault();
        this._searchOptions(parentElement, searchInput);
      });
      searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      });
      searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('paste', e => {
        e.preventDefault();
        searchInput.innerText = e.clipboardData.getData('text/plain');
        this._searchOptions(parentElement, searchInput);
      });
      resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', e => {
        e.preventDefault();
        this._reset(parentElement, searchInput);
      });
      parentElement.addEventListener('click', e => {
        const target = e.target;
        if (target && target.classList.contains('dropdown__item') || target && target.parentElement.classList.contains('dropdown__item')) {
          this._reset(parentElement, searchInput);
        }
      });
    });
  }

  /**
   * Показаль или скрыть поиск
   * @return {void}
   */
  _toggleSearch(parentElement, searchInput) {
    let searchBox = parentElement.querySelector(this._searchSelector),
      options = parentElement.querySelectorAll('.dropdown__item'),
      plug = searchInput.nextElementSibling;
    if (!!searchBox.hidden) {
      searchBox.hidden = false;
      searchInput.focus();
    } else {
      searchBox.hidden = true;
      searchInput.innerText = '';
      options.forEach(option => {
        option.style.display = 'block';
      });
      plug.hidden = true;
      plug.nextElementSibling.hidden = true;
    }
  }

  /**
   * Поиск по пунктам выподающего списка
   * @return {void}
   */
  _searchOptions(parentElement, searchInput) {
    let flag = false,
      valueInput = searchInput.innerText.trim(),
      options = parentElement.querySelectorAll('.dropdown__item'),
      plug = searchInput.nextElementSibling;
    plug.hidden = true;
    if (valueInput) {
      plug.nextElementSibling.hidden = false;
      options.forEach(option => {
        if (option.innerText.toUpperCase().includes(valueInput.toUpperCase())) {
          option.style.display = 'block';
          flag = true;
        } else {
          option.style.display = 'none';
        }
      });
      if (!flag) {
        plug.hidden = false;
      }
    } else {
      plug.nextElementSibling.hidden = true;
      options.forEach(option => {
        option.style.display = 'block';
      });
    }
  }

  /**
   * Сброс поиска до настроек по умолчанию
   * @return {void}
   */
  _reset(parentElement, searchInput) {
    let options = parentElement.querySelectorAll('.dropdown__item');
    options.forEach(option => {
      option.style.display = 'block';
    });
    searchInput.innerText = '';
    searchInput.nextElementSibling.hidden = true;
    searchInput.nextElementSibling.nextElementSibling.hidden = true;
  }
}

/***/ }),

/***/ "./src/js/plugin/stretch-in-select.plugin.js":
/*!***************************************************!*\
  !*** ./src/js/plugin/stretch-in-select.plugin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StretchInSelectPlugin; });
/**
 *  Панель для выпадающего списка, для раскрытия списка по горизонтали
 * */
class StretchInSelectPlugin {
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
      stretchBtn === null || stretchBtn === void 0 ? void 0 : stretchBtn.addEventListener('click', e => {
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
   * @param {string} componentBx - компонент на сервере к которому будем делать запросы
   */
  constructor(componentBx) {
    this.componentBx = componentBx;
  }

  /**
   * Запрос на сервер с параметрами
   * @param {string} action   - метод на сервере который будет обрабатывать запрос
   * @param {Object} data     - объект с данными которые будут передаваться на сервер
   * @return {Promise}
   */
  async useRequest(action, data) {
    // делаем ajax запрос в компонент my_components:ajax к методу action(Action())
    return await BX.ajax.runComponentAction(this.componentBx, action, {
      mode: 'class',
      data: data
    });

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "success",
    //       "data": {
    //         "result": '[{"ID":1,"NAME":"Вася"},{"ID":2,"NAME":"Петя"},{"ID":"3","NAME":"Юра"}]'
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })
  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getUsers() {
    // делаем ajax запрос в компонент bizproc:otipb.new к методу getUsersAction()
    const response = await BX.ajax.runComponentAction(this.componentBx, 'getUsers', {
      mode: 'class'
    });
    return JSON.parse(response.data.result);

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "error",
    //       "data": {
    //         "result": "[]"
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })
  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getFio() {
    // делаем ajax запрос в компонент bizproc:otipb.new к методу getUsersAction()
    const response = await BX.ajax.runComponentAction(this.componentBx, 'getFio', {
      mode: 'class'
    });
    return JSON.parse(response.data.result);

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "error",
    //       "data": {
    //         "result": "[]"
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })
  }
}

const apiService = new ApiService('bizproc:otipb.new');

/***/ }),

/***/ "./src/js/templates/card/cardPlug.template.js":
/*!****************************************************!*\
  !*** ./src/js/templates/card/cardPlug.template.js ***!
  \****************************************************/
/*! exports provided: cardPlugTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardPlugTemplate", function() { return cardPlugTemplate; });
/**
 *  Заглушка для удостовенений
 *  @param {string} text - текст заглушки
 *  @return {string}
 * */
function cardPlugTemplate(text) {
  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-12">
              ${text}
        </div>
      </div>
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/card/cardRecertification.template.js":
/*!***************************************************************!*\
  !*** ./src/js/templates/card/cardRecertification.template.js ***!
  \***************************************************************/
/*! exports provided: cardRecertificationTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardRecertificationTemplate", function() { return cardRecertificationTemplate; });
/**
 *  Шаблон удостоверения на переаттестации
 *  @param {Object} card - удостоверение
 *  @param {number} [card.idCard] - id
 *  @param {string} [card.programName] - название удостоверения
 *  @param {string} [card.cardNumber] - номер документа
 *  @param {string} [card.nextAttestationDate] - дата следующий аттестации
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @return {string}
 * */
function cardRecertificationTemplate(_ref, _ref2) {
  let {
    idCard,
    programName,
    cardNumber,
    nextAttestationDate
  } = _ref;
  let {
    idUser = null,
    customUser = null
  } = _ref2;
  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-9 g-justify-items-left" title="${programName || 'не заполнено'}.&#10Номер документа: ${cardNumber || 'не заполнено'}&#10Аттестация закончилась: ${nextAttestationDate || 'не заполнено'}">
          <span class="result__clip">
            ${programName || 'не заполнено'}
          </span>
        </div>
        <div class="col-3">
          <span class="result__options-card">
            <button class="button button--text js-edit-card-modal js-edit-card"" type="button" data-sumbiot-target="#edit-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/editCard">Продлить</button>
            <span class="p-relative d-inline-block">
              <button class="button button--text button--img-delete js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/deleteCard" title="Удалить удостоверение"></button>
            </span>
          </span>
        </div>
      </div>
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/card/training.template.js":
/*!****************************************************!*\
  !*** ./src/js/templates/card/training.template.js ***!
  \****************************************************/
/*! exports provided: trainingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingTemplate", function() { return trainingTemplate; });
/**
 *  Шаблон доступные обучения
 *  @param {Object} card - обучение
 *  @param {number} [card.ID] - id
 *  @param {string} [card.NAME] - название обучение
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @return {string}
 * */
function trainingTemplate(_ref, _ref2) {
  let {
    ID,
    NAME
  } = _ref;
  let {
    idUser = null,
    customUser = null
  } = _ref2;
  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col g-justify-items-left" title="${NAME || 'не заполнено'}">
          <span class="result__clip">
            ${NAME || 'не заполнено'}
          </span>
        </div>
        <div class="col-3">
          <button class="button button--text js-edit-card-modal" type="button" data-sumbiot-target="#edit-card-modal" data-id="${ID}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/addCard">Добавить</button>
        </div>
      </div>
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/card/сard.template.js":
/*!************************************************!*\
  !*** ./src/js/templates/card/сard.template.js ***!
  \************************************************/
/*! exports provided: cardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTemplate", function() { return cardTemplate; });
/**
 *  Шаблон действующие удостоверение
 *  @param {Object} card - удостоверение
 *  @param {number} [card.idCard] - id
 *  @param {string} [card.programName] - название удостоверения
 *  @param {string} [card.cardNumber] - номер документа
 *  @param {string} [card.attestationDate] - дата аттестации
 *  @param {string} [card.nextAttestationDate] - дата следующий аттестации
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @return {string}
 * */
function cardTemplate(_ref, _ref2) {
  let {
    idCard,
    programName,
    cardNumber,
    attestationDate,
    nextAttestationDate
  } = _ref;
  let {
    idUser = null,
    customUser = null
  } = _ref2;
  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-5 g-justify-items-left" title="${programName || 'не заполнено'}">
          <span class="result__clip">
            ${programName || 'не заполнено'}
          </span>
        </div>
        <div class="col-3" title="Номер документа: ${cardNumber || 'не заполнено'}&#10Дата аттестации: ${attestationDate || 'не заполнено'}">
          <span class="result__clip text-align-center">
            ${cardNumber || 'не заполнено'}
          </span>
        </div>
        <div class="col-2">${nextAttestationDate || 'не заполнено'}</div>
        <div class="col-2">
          <span class="result__options-card">
            <button class="button button--text js-edit-card-modal js-edit-card"" type="button" data-sumbiot-target="#edit-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/editCard">Редактировать</button>
            <span class="p-relative d-inline-block">
              <button class="button button--text button--img-delete js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/deleteCard" title="Удалить удостоверение"></button>
            </span>
          </span>
        </div>
      </div>
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/optionSelect.template.js":
/*!***************************************************!*\
  !*** ./src/js/templates/optionSelect.template.js ***!
  \***************************************************/
/*! exports provided: optionSelectTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionSelectTemplate", function() { return optionSelectTemplate; });
/**
 *  Шаблон пункт выподающего списка
 *  @param {Object} option - пункт выподающего списка
 *  @return {string}
 * */
function optionSelectTemplate(_ref) {
  let {
    ID,
    NAME
  } = _ref;
  return `
    <div class="dropdown__item" data-select-option="${ID}" title="${NAME}">
      ${NAME}
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/user/userCardInfo.template.js":
/*!********************************************************!*\
  !*** ./src/js/templates/user/userCardInfo.template.js ***!
  \********************************************************/
/*! exports provided: userCardInfoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCardInfoTemplate", function() { return userCardInfoTemplate; });
/* harmony import */ var _card_ard_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/сard.template */ "./src/js/templates/card/сard.template.js");
/* harmony import */ var _card_training_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/training.template */ "./src/js/templates/card/training.template.js");
/* harmony import */ var _card_cardRecertification_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/cardRecertification.template */ "./src/js/templates/card/cardRecertification.template.js");
/* harmony import */ var _card_cardPlug_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/cardPlug.template */ "./src/js/templates/card/cardPlug.template.js");





/**
 *  Шаблон информация о удостоверениях пользователя
 *  @param {Object} user - сотрудник
 *  @param {number} [user.idUser] - id
 *  @param {Object} [user.cards] - обьект с действующими ['NORMAL_DATE'] и просрочеными ['OVER_DATE'] удостоверениями
 *  @param {Array} [user.training] - обучения
 *  @param {number} [user.customUser] - обучения
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {string}
 * */
function userCardInfoTemplate(_ref) {
  let {
    idUser,
    cards,
    training,
    customUser
  } = _ref;
  let {
    build = 0
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  /**
   * список действующих удостоверений
   * @return {string}
   */
  const renderCard = () => {
    if (cards && cards['NORMAL_DATE']) {
      return cards['NORMAL_DATE'].map(card => Object(_card_ard_template__WEBPACK_IMPORTED_MODULE_0__["cardTemplate"])(card, {
        idUser,
        customUser
      })).join(' ');
    } else {
      return Object(_card_cardPlug_template__WEBPACK_IMPORTED_MODULE_3__["cardPlugTemplate"])('Нет удостоверений');
    }
  };

  /**
   * список обучений
   * @return {string}
   */
  const renderTraining = () => {
    if (training && training.length) {
      return training.map(training => Object(_card_training_template__WEBPACK_IMPORTED_MODULE_1__["trainingTemplate"])(training, {
        idUser,
        customUser
      })).join(' ');
    } else {
      return Object(_card_cardPlug_template__WEBPACK_IMPORTED_MODULE_3__["cardPlugTemplate"])('Нет обучений');
    }
  };

  /**
   * список удостоверения на переаттестации
   * @return {string}
   */
  const renderRecertification = () => {
    if (cards && cards['OVER_DATE']) {
      return cards['OVER_DATE'].map(card => Object(_card_cardRecertification_template__WEBPACK_IMPORTED_MODULE_2__["cardRecertificationTemplate"])(card, {
        idUser,
        customUser
      })).join(' ');
    } else {
      return Object(_card_cardPlug_template__WEBPACK_IMPORTED_MODULE_3__["cardPlugTemplate"])('Нет удостоверений');
    }
  };

  /**
   * Конфигурация пользователя
   * @return {string}
   */
  const renderUserConfig = () => {
    // кастомный пользователь
    if (build === 1) {
      return `
        <button class="result__info-options-btn button button--icon js-edit-user-modal" type="button" data-sumbiot-target="#edit-user-modal" data-id="${idUser}" title="Редактировать сотрудника">
          <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/edit-user-icon.svg" width="22" height="22" alt="">
        </button>
        <span class="p-relative d-inline-block">
          <button class="result__info-options-btn button button--icon js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idUser}" data-action="/deleteUser" title="Удалить сотрудника">
            <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/remove-user-icon.svg" width="22" height="22" alt="">
          </button>
        </span>
      `;
    }
    // существующий пользователь из BX
    else if (build === 2) {
      return `
        <button class="result__info-options-btn button button--icon js-edit-hse-modal" type="button" data-sumbiot-target="#edit-hse-modal" data-id="${idUser}" title="Изменить должность HSE">
          <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/edit-document-icon.svg" width="22" height="22" alt="">
        </button>
      `;
    }
    // существующий пользователь из BX без HSE
    else {
      return ``;
    }
  };
  return `
    <div class="result__info-box">
      <div class="result__info-title">
        Удостоверение действующие

        <div class="result__info-options">
          ${renderUserConfig()}
        </div>
      </div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-5">Программа обучения</div>
            <div class="col-3">Номер документа</div>
            <div class="col-2">Дата след. аттестации</div>
            <div class="col-2">Опции</div>
          </div>
        </div>

        ${renderCard()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->

    <div class="result__info-box">
      <div class="result__info-title">Доступные обучения</div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-9">Программа обучения</div>
            <div class="col-3">Опции</div>
          </div>
        </div>

        ${renderTraining()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->

    <div class="result__info-box">
      <div class="result__info-title">Удостоверение на переаттестации</div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-9">Программа обучения</div>
            <div class="col-3">Опции</div>
          </div>
        </div>

        ${renderRecertification()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->
  `;
}

/***/ }),

/***/ "./src/js/templates/user/userInfo.template.js":
/*!****************************************************!*\
  !*** ./src/js/templates/user/userInfo.template.js ***!
  \****************************************************/
/*! exports provided: userInfoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoTemplate", function() { return userInfoTemplate; });
/**
 *  Шаблон информация о пользователе
 *  @param {Object} user - сотрудник
 *  @param {number} [user.idUser] - id
 *  @param {string} [user.fio] - ФИО
 *  @param {string} [user.division] - дивизион
 *  @param {string} [user.department] - отдел
 *  @param {string} [user.work] - названия должности
 *  @param {string} [user.status] - названия должности
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {string}
 * */
function userInfoTemplate(_ref) {
  let {
    idUser,
    fio,
    division,
    department,
    work,
    status
  } = _ref;
  let {
    build = 0
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  /**
   * Конфигурация пользователя
   * @return {string}
   */
  const renderUserConfig = () => {
    // кастомный пользователь
    if (build === 1) {
      return `
        <div class="col-4 g-justify-items-left js-matrix-work-hse" title="${work || 'не заполнено'}">
          <span class="result__clip">
            ${work || 'не заполнено'}
          </span>
        </div>
      `;
    }
    // существующий пользователь из BX
    else if (build === 2) {
      return `
        <div class="col-4 g-justify-items-left js-matrix-work-hse" title="${work || 'не заполнено'}">
          <span class="result__clip">
            ${work || 'не заполнено'}
          </span>
        </div>
      `;
    }
    // существующий пользователь из BX без HSE
    else {
      return `
        <div class="col-4 js-matrix-work-hse">
          <span class="p-relative d-inline-block">
            <button class="button button--icon js-add-hse-modal" type="button" data-sumbiot-target="#add-hse-modal" data-id="${idUser}" title="Добавить должность HSE">
              <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/add-document-icon.svg" width="18" height="18" alt="">
            </button>
          </span>
        </div>
      `;
    }
  };
  return `
    <div class="col-1" title="ID: ${idUser}"></div>
    <div class="col-2" title="Отдел: ${department || 'не заполнено'}">
      <span class="result__clip text-align-center">
        ${division || 'не заполнено'}
      </span>
    </div>
    <div class="col-3 g-justify-items-left" title="${fio || 'не заполнено'}">
      <span class="result__clip">
        ${fio || 'не заполнено'}
      </span>
    </div>
    ${renderUserConfig()}
    <div class="col-1">${status || 'не заполнено'}</div>
    <div class="col-1">
      <button class="result__options-arrow button button--arrow" type="button" title="Подробно"></button>
    </div>
  `;
}

/***/ }),

/***/ "./src/js/templates/user/userMain.template.js":
/*!****************************************************!*\
  !*** ./src/js/templates/user/userMain.template.js ***!
  \****************************************************/
/*! exports provided: userMainTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userMainTemplate", function() { return userMainTemplate; });
/* harmony import */ var _userInfo_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.template */ "./src/js/templates/user/userInfo.template.js");
/* harmony import */ var _userCardInfo_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userCardInfo.template */ "./src/js/templates/user/userCardInfo.template.js");



/**
 *  Шаблон сотрудник
 *  @param {Object} user - сотрудник
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {string}
 * */
function userMainTemplate(user) {
  let {
    build = 0
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return `
    <div class="result__row js-result-row">

      <div class="row gx-0 js-accordion js-user-info">
        ${Object(_userInfo_template__WEBPACK_IMPORTED_MODULE_0__["userInfoTemplate"])(user, {
    build
  })}
      </div><!--/.js-user-info-->

      <div class="result__info js-wrapper-modal">
        ${Object(_userCardInfo_template__WEBPACK_IMPORTED_MODULE_1__["userCardInfoTemplate"])(user, {
    build
  })}
      </div><!--./result__info-->

    </div><!--./result__row-->
  `;
}

/***/ }),

/***/ "./src/js/templates/user/userPlug.template.js":
/*!****************************************************!*\
  !*** ./src/js/templates/user/userPlug.template.js ***!
  \****************************************************/
/*! exports provided: userPlugTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPlugTemplate", function() { return userPlugTemplate; });
/**
 *  Заглушка для сотрудников
 *  @param {string} text - текст заглушки
 *  @return {string}
 * */
function userPlugTemplate(text) {
  return `
    <div class="result__row js-result-row">
      <div class="row gx-0 result__empty">
        <div class="col-12 text-align-center d-block">
          ${text}
        </div>
      </div>
    </div><!--./result__row-->
  `;
}

/***/ }),

/***/ "./src/js/templates/workName.template.js":
/*!***********************************************!*\
  !*** ./src/js/templates/workName.template.js ***!
  \***********************************************/
/*! exports provided: workNameTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workNameTemplate", function() { return workNameTemplate; });
/**
 *  Шаблон должность HSE
 *  @param {string} title - название должности
 *  @return {string}
 * */
function workNameTemplate(title) {
  return `
    <span class="result__clip">
      ${title}
    </span>
  `;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map