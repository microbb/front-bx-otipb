
/**
 *  API Сервисы
 * */
class ApiService{

  /**
   * Конструктор
   * @param {string} componentBx - компонент на сервере к которому будем делать запросы
   */
  constructor(componentBx) {
    this.componentBx = componentBx
  }

  /**
   * Запрос на сервер с параметрами
   * @param {string} action   - метод на сервере который будет обрабатывать запрос
   * @param {Object} data     - объект с данными которые будут передаваться на сервер
   * @return {Promise}
   */
  async useRequest(action,data) {

    // делаем ajax запрос в компонент my_components:ajax к методу action(Action())
    return await BX.ajax.runComponentAction(this.componentBx, action, {
      mode: 'class',
      data: data
    })

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "success",
    //       "data": {
    //         "result": '[{"ID":1,"NAME":"Вася"},{"ID":2,"NAME":"Петя"},{"ID":"3","NAME":"Юра"}]'
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })

  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getUsers() {
    // делаем ajax запрос в компонент bizproc:otipb.new к методу getUsersAction()
    const response = await BX.ajax.runComponentAction(this.componentBx, 'getUsers', {
      mode: 'class'
    })

    return JSON.parse(response.data.result)

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "error",
    //       "data": {
    //         "result": "[]"
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })
  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getFio() {
    // делаем ajax запрос в компонент bizproc:otipb.new к методу getUsersAction()
    const response = await BX.ajax.runComponentAction(this.componentBx, 'getFio', {
      mode: 'class'
    })

    return JSON.parse(response.data.result)

    // return new Promise((resolve,reject) => {
    //
    //   setTimeout(() => {
    //     resolve({
    //       "status": "error",
    //       "data": {
    //         "result": "[]"
    //       },
    //       "errors": [{
    //         "message": "Не заполено поле Email",
    //         "code": 0,
    //         "customData": null
    //       }]
    //     })
    //   },2000)
    // })
  }

}

export const apiService = new ApiService('bizproc:otipb.new')
