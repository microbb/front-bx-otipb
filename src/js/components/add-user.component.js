import Component from "../core/component"

import Form from "../core/form";
import {Validators} from "../core/validators";

import {apiService} from "../services/api.service";

/**
 *  Компонент добавить кастомного сотрудника
 * */
export default class AddUserComponent extends Component {

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
      E_FIO: [],
      ID_DIVISION: [Validators.required],
      ID_DEPARTMENT: [Validators.required],
      ID_MATRIX_WORKS: [Validators.required],
      E_EMPLOYEE_STATUS: [Validators.required]
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

    try {

      const action = this.$el.getAttribute('action').slice(1),
            formData = new FormData(this.$el)

      const response =  await apiService.useRequest(action,formData, {
        thisComponentCreateRequest: 'AddUserComponent'
      })

      // if(response) {}

      console.log(response)

    } catch (err) {

      console.group('In file AddUserComponent error')
        console.error(`Error description: ${err.message}`)
      console.groupEnd();

    } finally {

      // finallyStatements

    }



  }



}
