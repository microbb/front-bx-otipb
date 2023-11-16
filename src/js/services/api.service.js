
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

    try {
      // делаем ajax запрос в компонент my_components:ajax к методу action(Action())
      return await BX.ajax.runComponentAction(this.componentBx, action, {
        mode: 'class',
        data: data
      })

      // return await new Promise((resolve,reject) => {
      //
      //   setTimeout(() => {
      //     reject({
      //       "status": "error",
      //       "data": {
      //         "result": '[{"ID":1,"NAME":"Вася"},{"ID":2,"NAME":"Петя"},{"ID":"3","NAME":"Юра"}]'
      //       },
      //       "errors": [{
      //         "message": "Не заполено поле Email1",
      //         "code": 0,
      //         "customData": null
      //       }]
      //     })
      //   },2000)
      // })
    } catch (error) {

      if(error.status === 'error') {
        throw {
          functionName : 'useRequest',
          ...error
        }
      }

      throw error
    }
  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getUsers() {

    try{
      // делаем ajax запрос в компонент bizproc:otipb.new к методу getUsersAction()
      const response = await BX.ajax.runComponentAction(this.componentBx, 'getUsers', {
        mode: 'class'
      })

      return response.data.result

      // let response = await new Promise((resolve,reject) => {
      //
      //   setTimeout(() => {
      //     reject({
      //       "status": "error",
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
      //
      // return JSON.parse(response.data.result)
    } catch (error) {

      if(error.status === 'error') {
        throw {
          functionName : 'getUsers',
          ...error
        }
      }

      throw error
    }
  }

  /**
   * Запрос на сервер для получения всех сотрудников
   * @return {Promise}
   */
  async getFio() {
    // делаем ajax запрос в компонент bizproc:otipb.new к методу getFioAction()
    const response = await BX.ajax.runComponentAction(this.componentBx, 'getFio', {
      mode: 'class'
    })

    return JSON.parse(response.data.result)

    // return await new Promise((resolve,reject) => {
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
  async getAccessAdmin() {
    try {
      // делаем ajax запрос в компонент bizproc:otipb.new к методу getAccessRight()
      const response = await BX.ajax.runComponentAction(this.componentBx, 'getAccessAdmin', {
        mode: 'class'
      })

      return response.data.result

      // let response = await new Promise((resolve,reject) => {
      //
      //   setTimeout(() => {
      //     resolve({
      //       "status": "error",
      //       "data": {
      //         "result": false
      //       },
      //       "errors": [{
      //         "message": "Не заполено поле Email",
      //         "code": 0,
      //         "customData": null
      //       }]
      //     })
      //   },2000)
      // })
      //
      // return response.data.result
    } catch (error) {

      if(error.status === 'error') {
        throw {
          functionName : 'getAccessAdmin',
          ...error
        }
      }

      throw error
    }

  }
}

export const apiService = new ApiService('bizproc:otipb.new')
