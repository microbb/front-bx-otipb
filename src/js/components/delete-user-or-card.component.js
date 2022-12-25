import Component from "../core/component"

import Form from "../core/form";

import {apiService} from "../services/api.service";
import Loader from "./loader";

/**
 *  Компонент добавить кастомного сотрудника
 * */
export default class DeleteUserOrCardComponent extends Component {

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
      ID: []
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

    const loader = new Loader({
      loading: 'Удаление',
      success: 'Успех',
      failure: 'Неудача',
      activeClass: 'loader--delete'
    })

    try {

      const action = this.$el.getAttribute('action').slice(1),
            formData = new FormData(this.$el)

      this.$el.append(loader.loading())

      const response = await apiService.useRequest(action,formData)

      if(action === 'deleteUser'){
        loader.success()

        setTimeout(() => {
          const parent = this.$el.closest('.result__row')

          parent.remove()
        },900)
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

        console.group('In file DeleteUserOrCardComponent, in function submitHandler error')
          console.error(`${error.stack}`)
        console.groupEnd();

      }

    } finally {

      setTimeout(() => {

        this.$el.closest('.modal').style.display = 'none'

        loader.removeLoader()
      }, 900)

    }

  }

}
