import Component from "../core/component"

import Form from "../core/form";
import {Validators} from "../core/validators";

import {apiService} from "../services/api.service";
import Loader from "./loader";

import {userInfoTemplate} from "../templates/user/userInfo.template";
import {workNameTemplate} from "../templates/workName.template";

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

    const loader = new Loader({
      loading: 'Добавление должности',
      success: 'Должность добавлена',
      failure: 'Должность не добавлена'
    })

    try {

      const action = this.$el.getAttribute('action').slice(1),
        formData = new FormData(this.$el)

      this.$el.querySelector('button').blur()
      this.$el.append(loader.loading())

      const response = await apiService.useRequest(action,formData),
            htmlInfo = userInfoTemplate(response.data.result,{build: 2}),
            htmlWork = workNameTemplate(response.data.result.work)

      loader.success()

      setTimeout(() => {
        const parent = this.$el.closest('.result__row'),
              info = parent.querySelector('.result__info'),
              work = parent.querySelector('.js-matrix-work-hse')

        info.innerHTML = htmlInfo

        work.classList.add('g-justify-items-left')
        work.setAttribute('title',response.data.result.work)
        work.innerHTML = htmlWork
      },900)

    } catch (error) {

      loader.failure()

      if(error.status === 'error') {

        console.group('In file ApiService, in function useRequest, promise return reject')
          console.error(`Error description: ${error.data.result}`)

          console.group('List of errors')

          error.errors.forEach(error => {
            console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`)
          })

          console.groupEnd();

        console.groupEnd();

      } else {

        console.group('In file AddOrEditHseComponent error')
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
