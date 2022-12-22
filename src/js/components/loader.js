
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

    this.$img = document.createElement('img')
    this.$img.classList.add('loader_img')

    this.$img.setAttribute('width','44')
    this.$img.setAttribute('height','44')

    this.$p = document.createElement('p')
    this.$p.classList.add('loader__massage')

    this.$el.append(this.$img)
    this.$el.append(this.$p)
  }

  loading() {
    this.$img.setAttribute('src', this.message.loading.img)
    this.$p.innerHTML = this.message.loading.title

    return this.$el
  }

  success() {
    this.$img.setAttribute('src',this.message.success.img)
    this.$p.innerHTML = this.message.success.title
  }

  failure() {
    this.$img.setAttribute('src',this.message.failure.img)
    this.$p.innerHTML = this.message.failure.title
  }

  removeLoader() {
    this.$el.remove()
  }
}
