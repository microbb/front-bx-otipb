import Component from "../core/component";

import Pagination from "../library/sumbiot/modules/pagination/components/pagination";

import {userMainTemplate} from "../templates/user/userMain.template";
import {userPlugTemplate} from "../templates/user/userPlug.template";

/**
 *  Компонент выводит результат работы компонента фильтр
 * */
export default class ResultFilterComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);

    this.$pasteInElement =  this.$el.querySelector('.result__inner')
    this.data = null

  }

  /**
   * Зарегистрировать данные для показа
   * @param {Array} result - данные для показа
   * @param {Object=} options - дополнительные данные и настройки
   * @return {this}
   */
  register(result,options= {}) {

    this.data = {
      result,
      ...options
    }

    return this
  }

  /**
   * Показать компонент
   * @return {void}
   */
  show() {
    this.$el.style.display = 'block'

    this._onShow()
  }

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow() {

    if(this.data) {

      if(Array.isArray(this.data.result) && this.data.result.length) {

        this.html = this.data.result.map(user => {
          if(+user.customUser) {
            return userMainTemplate(user,{build: 1})
          } else if (+user.idMatrixWorks) {
            return userMainTemplate(user,{build: 2})
          } else {
            return userMainTemplate(user,{build: 0})
          }
        })

        this.pagination = new Pagination(this.$el,this.$pasteInElement,this.html,{
          counter: {
            active: true,
            selectorForInserts: '[data-sumbiot-page-counter]'
          }
        })
      }
      else{
        this.html = userPlugTemplate(`Найдено: 0 совпадений`)

        this.$pasteInElement.insertAdjacentHTML('afterbegin',this.html)
      }

      this.data = null

    }
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
  _onHide() {
    this.$pasteInElement.innerHTML = ''
    this.$el.querySelector('.pagination')?.remove()
  }

  /**
   * Удаляем из моссива элемент
   * @param {string} id - id сотрудника которого надо удалить
   * @return {this}
   */
  removeElementInArray(id) {

    if(this.html && Array.isArray(this.html)) {
      let index = this.html.findIndex(user =>  user.querySelector('[data-sumbiot-page-counter]').dataset.id === id)

      if(index !== -1) {
        this.html.splice(index,1)

        this.pagination.showPage(this.pagination._page)
      }

    }

  }

}
