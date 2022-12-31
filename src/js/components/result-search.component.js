import Component from "../core/component";

import Pagination from "../library/sumbiot/modules/pagination/components/pagination";

import {userMainTemplate} from "../templates/user/userMain.template";
import {userPlugTemplate} from "../templates/user/userPlug.template";

/**
 *  Компонент выводит результат работы компонента фильтр
 * */
export default class ResultSearchComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);

    this.$pasteInElement =  this.$el.querySelector('.result__inner')

  }

  /**
   * Показать компонент
   * @param {Array} result - какой результат показать
   * @param {Object=} options - настройки
   * @return {void}
   */
  show(result,options= {}) {
    this.$el.style.display = 'block'

    this._onShow(result,options)
  }

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow(result,{bntNext} = {}) {

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
        new Pagination(this.$el,this.$pasteInElement,html)
      },950)
    }
    else{

      let html = userPlugTemplate(`Ваш запрос не дал результатов`)

      setTimeout(() => {
        this.$pasteInElement.insertAdjacentHTML('afterbegin',html)

        this.$el.querySelector('.text-align-center')?.append(bntNext)
      },950)
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

}
