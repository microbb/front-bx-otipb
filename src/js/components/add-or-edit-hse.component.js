import Component from "../core/component"

import Form from "../core/form";
import {Validators} from "../core/validators";

import {apiService} from "../services/api.service";

/**
 *  Компонент добавить кастомного сотрудника
 * */
export default class AddOrEditHseComponent extends Component {

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
      ID: [],
      ID_MATRIX_WORKS: [Validators.required]
    })

  }

}

/**
 * Обработчик отправки формы
 * @return {void}
 */
async function submitHandler(e) {

  e.preventDefault()

  if(this.form.isValid()){

    console.log('Триста тридцать три')

  }

}
