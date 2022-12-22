
/**
 *  API Сервисы
 * */
class ApiService{


  /**
   * Конструктор
   * @param {string=} componentBx - компонент на сервере к которому будем делать запросы
   */
  constructor(componentBx= "") {
    this.componentBx = componentBx || `${location.origin}${location.pathname}`
  }

  /**
   * Запрос на сервер
   * @param {string} action   - метод на сервере который будет обрабатывать запрос
   * @param {Object} data     - объект с данными которые будут передаваться на сервер
   * @param {Object} options  - объект с дополнительными настройками
   * @param {string=} [options.thisComponentCreateRequest] - компонент который отправляет запрос на сервер
   * @return {Promise}
   */
  async useRequest(action,data,{thisComponentCreateRequest = ''} = {}) {

    try{

      // делаем ajax запрос в компонент my_components:ajax к методу action(Action())
      return await BX.ajax.runComponentAction(this.componentBx, action, {
        mode: 'class',
        data: data
      })

    } catch (err){

      console.group('In file ApiService, in function useRequest error')
        console.error(`Sends a request: ${thisComponentCreateRequest}`)
        console.error(`Error description: ${err.message}`)
      console.groupEnd();
    }

  }

}

export const apiService = new ApiService()
