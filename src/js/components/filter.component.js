import Component from "../core/component"

import Pagination from "../library/sumbiot/modules/pagination/components/pagination";

import Form from "../core/form";

import {apiService} from "../services/api.service";
import Loader from "./loader";

import {userMainTemplate} from "../templates/user/userMain.template";
import {userPlugTemplate} from "../templates/user/userPlug.template";

/**
 *  Компонент добавить кастомного сотрудника
 * */
export default class FilterComponent extends Component {

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

    this.$el.addEventListener('reset', resetHandler.bind(this))

    this.form = new Form(this.$el, {
      DATE_BEGIN: [],
      DATE_END: [],
      ID_DIVISION: [],
      ID_MATRIX_WORKS: [],
      ID_PROGRAM: []
    })

  }

}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {

  e.preventDefault()
  e.target.querySelector('.form__button--submit').blur()

  if(this.form.isValid()){

    const loader = new Loader({
      loading: 'Идет фильтрация данных',
      failure: 'Ошибка'
    })

    try {

      const action = this.$el.getAttribute('action').slice(1),
            formData = new FormData(this.$el)

      this.$el.append(loader.loading())

      const response = await apiService.useRequest(action,formData),
            result = JSON.parse(response.data.result),
            count = result.length || 0

      const htmlUsers = result.length ?
            result.map(user => {
              if(+user.customUser) {
                return userMainTemplate(user,{build: 1})
              } else if (+user.idMatrixWorks) {
                return userMainTemplate(user,{build: 2})
              } else {
                return userMainTemplate(user,{build: 0})
              }
            }) :
            userPlugTemplate(`Найдено: ${count} совпадений`)

      loader.success(`Найдено: ${count} совпадений`)

      const $parent = document.querySelector('#filter-result'),
            $boxPaste = $parent.querySelector('.result__inner'),
            $blocks = document.querySelectorAll('.result__body')

      $blocks.forEach(block => {
        block.style.display = 'none'
      })

      htmlUsers.length ?
        new Pagination('#filter-result','#filter-result .result__inner',htmlUsers) :
        $boxPaste.insertAdjacentHTML('afterbegin',htmlUsers)

      $parent.style.display = 'block'

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

        console.group('In file FilterComponent error')
          console.error(`${error.stack}`)
        console.groupEnd();

      }

    } finally {

      setTimeout(() => {

        loader.removeLoader()

      }, 900)

    }

  }

}

/**
 * Обработчик сброса фильтра
 * @return {void}
 */
function resetHandler(e) {

  setTimeout(() => {
    e.target.querySelector('.form__button--reset_filter').blur()
  },150)

  this.instanceDropDown.reset(this.form.form)

  document.querySelectorAll('.result__body').forEach(block => {
    block.style.display = 'none'

    if(block.matches('#filter-result')) {
      block.querySelector('.result__inner').innerHTML = ''
      block.querySelector('.pagination')?.remove()
    }

    if(block.matches('#main-result')) {
      block.style.display = 'block'
    }
  })

}
