import Component from "../core/component"

import Form from "../plugin/form-validator/form";
import {Validators} from "../plugin/form-validator/validators";
import Support from "../core/support";

import {apiService} from "../services/api.service";
import LoaderComponent from "./loader.component";

import {userInfoTemplate} from "../templates/user/userInfo.template";
import {userCardInfoTemplate} from "../templates/user/userCardInfo.template";
import ChainingSelectInFormPlugin from "../plugin/chaining-select-in-form.plugin";
import {optionSelectTemplate} from "../templates/optionSelect.template";

/**
 *  Компонент добавить кастомного сотрудника
 * */
export default class FormEditUserComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);

    this.instanceDropDown = options.dropDown || {}
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    document.addEventListener('click', (e) => {
      let target = e.target;

      if (target && target.classList.contains('js-edit-user-modal') || target.parentElement.classList.contains('js-edit-user-modal') ) {
        e.preventDefault()

        if (target.parentElement.classList.contains('js-edit-user-modal')){
          target = target.parentElement
        }

        getData.call(this,target)

      }
    })

    this.form = new Form(this.$el, {
      ID: [],
      E_FIO: [],
      ID_DIVISION: [Validators.required],
      ID_DEPARTMENT: [Validators.required],
      ID_MATRIX_WORKS: [Validators.required],
      E_EMPLOYEE_STATUS: [Validators.required]
    })

    this.chainSelect = new ChainingSelectInFormPlugin(this.$el,
      {
        callAction: 'getDepartments'
      },
      {
        renderTemplate : optionSelectTemplate
    })

  }

}

/**
 * Обработчик заполнения формы
 * @return {void}
 */
async function getData(target) {

  let idTimeout;

  const loader = new LoaderComponent({
    loading: 'Идет сбор данных, о сотруднике',
  })

  try {

    const formData = new FormData(),
          fioInput = this.$el.querySelector('.js-edit-fio'),
          divisionOptions = Array.from(this.$el.querySelectorAll('[data-sumbiot-selectA] .dropdown__item'))

    formData.append('ID',target.dataset.id)

    idTimeout = setTimeout(() =>{
      this.$el.append(loader.loading())
    },400)

    const response = await apiService.useRequest('getUserInfo',formData),
          result = JSON.parse(response.data.result),
          $divisionItem = divisionOptions.find(option => option.dataset.selectOption === result.ID_DIVISION)

    // заполняем выподающий список отделов
    await this.chainSelect.fillSelectB($divisionItem)

    // делаем активный дивизион
    this.instanceDropDown.select(this.chainSelect.$selectA,$divisionItem)

    // заполняем ФИО
    fioInput.value = result.fio

    delete result.fio
    delete result.ID_DIVISION

    // делаем активный отдел / должность HSE / статус
    const optionsKey = Object.values(result),
          options = this.$el.querySelectorAll('.dropdown__item:not([data-sumbiot-selectA])')

    options.forEach(option => {
      if(optionsKey.includes(option.dataset.selectOption)) {

        option.click()

      }
    })

  } catch (error) {
    if(error.status === 'error') {

      console.group('In file ApiService, in function useRequest, promise return reject')

        console.group('List of errors')

        error.errors.forEach(error => {
          console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`)
        })

        console.groupEnd();

      console.groupEnd();

    } else {

      console.group('In file FormEditUserComponent, in function getData error')
        console.error(`${error.stack}`)
      console.groupEnd();

    }
  } finally {
    clearTimeout(idTimeout)

    loader.removeLoader()
  }

}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {

  e.preventDefault()

  if(this.form.isValid()){

    const loader = new LoaderComponent({
      loading: 'Идет добавления сотрудника',
      success: 'Сотрудник добавлен',
      failure: 'Сотрудник не добавлен'
    })

    try {

      const action = this.$el.getAttribute('action').slice(1),
            formData = new FormData(this.$el)

      this.$el.append(loader.loading())

      const response = await apiService.useRequest(action,formData),
            result = JSON.parse(response.data.result)

      const htmlUserInfo = userInfoTemplate(result,{build: 1}),
            htmlCardInfo = userCardInfoTemplate(result,{build: 1})

      loader.success()

      setTimeout(() => {
        const parent = this.$el.closest('.result__row'),
              user = parent.querySelector('.js-user-info'),
              info = parent.querySelector('.result__info')

        user.innerHTML = htmlUserInfo
        info.innerHTML = htmlCardInfo

      },900)

    } catch (error) {

      loader.failure()

      if(error.status === 'error') {

        console.group('In file ApiService, in function useRequest, promise return reject')

          console.group('List of errors')

          error.errors.forEach(error => {
            console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`)
          })

          console.groupEnd();

        console.groupEnd();

      } else {

        console.group('In file FormEditUserComponent, in function submitHandler error')
          console.error(`${error.stack}`)
        console.groupEnd();

      }

    } finally {

      setTimeout(() => {
        this.form.clear()
        this.instanceDropDown.reset(this.form.form)
        this.chainSelect.deleteOptions()

        this.$el.closest('.modal').style.display = 'none'

        Support.removeClass('.js-wrapper-modal',
          ['result__info--min_height-380', 'result__info--min_height-442', 'result__info--min_height-265'])

        loader.removeLoader()
      }, 900)

    }

  }

}
