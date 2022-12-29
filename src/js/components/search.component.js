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
export default class SearchComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  _init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.form = new Form(this.$el, {
      SEARCH: [],
      STATUS: []
    })

  }

  /**
   * Скрывает не нужные блоки и отрисовывает блок поиска
   * @param {function} cb - callback функция
   * @return {void}
   */
  _hideAllBlocks(cb = null) {
    document.querySelectorAll('.result__body').forEach(block => {
      block.style.display = 'none'

      if(block.matches('#search-result')) {
        block.querySelector('.result__inner').innerHTML = ''
        block.querySelector('.pagination')?.remove()
      }

      if(typeof cb === 'function') {
        cb(block)
      }
    })
  }

}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {

  e.preventDefault()
  e.target.querySelector('.js-button-search-submit').blur()

  if(this.form.isValid()){

    const loader = new Loader({
      loading: 'Идет поиск сотрудника',
      failure: 'Ошибка',
      activeClass: 'loader--min-height'
    })

    try {

        const action = this.$el.getAttribute('action').slice(1),
              formData = new FormData(this.$el),
              parentBox = document.querySelector('#search-result')

        this._hideAllBlocks()

        parentBox.prepend(loader.loading())

        parentBox.style.display = 'block'

        const response = await apiService.useRequest(action,formData),
              result = JSON.parse(response.data.result),
              count = result.length || 0

        loader.success(`Найдено: ${count} совпадений`)

        if(Array.isArray(result) && result.length) {

          let html = result.map(user => {
            if(+user.customUser) {
              return userMainTemplate(user,{build: 1})
            } else if (+user.idMatrixWorks) {
              return userMainTemplate(user,{build: 2})
            } else {
              return userMainTemplate(user,{build: 0})
            }
          })

          setTimeout(() => {
            new Pagination('#search-result','#search-result .result__inner',html)
          },1000)
        }
        else{

          let html = userPlugTemplate(`Ваш запрос не дал результатов`)

          setTimeout(() => {
            parentBox.querySelector('.result__inner')
              .insertAdjacentHTML('afterbegin',html)

            parentBox.querySelector('.text-align-center')?.append(nextBtn())
          },1000)
        }

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

        console.group('In file SearchComponent error')
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
 * Назад кнопка
 * @return {HTMLElement}
 */
function nextBtn() {
  let btn = document.createElement('button'),
      text = document.createTextNode('на главную')

  btn.append(text)
  btn.classList.add('button','button--text')
  btn.style.marginLeft = '10px'

  btn.addEventListener('click', () => {
    document.querySelectorAll('.result__body').forEach(block => {
      block.style.display = 'none'

      if(block.matches('#search-result')) {
        block.querySelector('.result__inner').innerHTML = ''
        block.querySelector('.pagination')?.remove()
      }

      if(block.matches('#main-result')) {
        block.style.display = 'block'
      }
    })
  })

  return btn
}


