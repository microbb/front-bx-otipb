
/**
 *  API Сервисы
 * */
class ApiService{


  /**
   * Конструктор
   * @param {string=} baseUrl  - url сервиса на который будем делать запросы
   */
  constructor(baseUrl= "") {

    this.url = baseUrl || `${location.origin}${location.pathname}`

  }

}

export const apiService = new ApiService()
