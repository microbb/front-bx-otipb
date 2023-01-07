import Component from "../core/component";

import {userMainTemplate} from "../templates/user/userMain.template";

/**
 *  Компонент вывод все сотрудников
 * */
export default class ResultMainComponent extends Component {

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
   * добавить сотрудника в начало
   * @param {Object} user - сотрудник
   * @return {this}
   */
  unshift(user) {
    let html =  userMainTemplate(user,{build: 1})

    this.$pasteInElement.insertAdjacentHTML('afterbegin', html)

    return this
  }

}
