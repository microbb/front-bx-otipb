
/**
 *  Погрузчик
 * */

export default class Loader{

  /**
   * Конструктор
   * @param {Object=} message - компонент на сервере к которому будем делать запросы
   */
  constructor({
                loading = 'Загрузка...',
                success = 'Успех',
                failure = 'Неудача'
              } = {}) {

    this.message = {
      loading: {
        title: loading,
        img: 'assets/img/loader.svg'
      },
      success: {
        title: success,
        img: 'assets/img/ok.gif'
      },
      failure: {
        title: failure,
        img: 'assets/img/error.gif'
      }
    }

    this._init()
  }

  _init(){

    this._fillHTML()

  }

  _fillHTML() {
    this.$el = document.createElement('div')
    this.$el.classList.add('loader')

    this.$el.innerHTML = `
      <div class="loader__img"></div>
      <p class="loader__massage">${this.message.loading.title}</p>
    `
  }

  loading() {
    return this.$el
  }

  success() {
    this.$el.querySelector('.loader__massage').innerHTML = this.message.success.title
  }

  failure() {
    this.$el.querySelector('.loader__massage').innerHTML = this.message.failure.title
  }

  removeLoader() {
    this.$el.remove()
  }
}
