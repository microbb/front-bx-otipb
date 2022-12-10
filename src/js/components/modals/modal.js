
/**
 *  Модальное окна
 * */
export default class Modal{

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector ,
              {
                modalSelector = null,          // - селектор модального окна которое мы будем открывать.
                closeSelector= '[data-sumbiot-modal-close]', // - селектор который закрывает модальное окно.
                closeClickOverlay = true,      // - будет ли закрываться окно по клику по подложки
              } = {}) {

    this._trigger = triggerSelector
    this.modal = document.querySelector(modalSelector || document.querySelector(triggerSelector).dataset.sumbiotTarget)
    this._close = this.modal.querySelector(closeSelector)

    this._windows = document.querySelectorAll('[data-sumbiot-modal]')
    this._closeClickOverlay = closeClickOverlay

    this._init()
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this.hideAllModals()

    this._showHandler()

    this._closeHandler()
  }

  /**
   * Скрывает все модальные окна
   * @return {void}
   */
  hideAllModals() {
    this._windows.forEach(modal => {
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'none';
    })
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1)) ) {
        this._show(e)

        setTimeout(() =>{
          target.blur()
        },150)
      }
    })
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show(e){
    if (e.target) {
      e.preventDefault()
    }

    this.hideAllModals()

    this.modal.style.display = "block";
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this._close.addEventListener('click', (e) => {
      this._closeModal(e)
    })

    this.modal.addEventListener('click', (e) => {
      this._closeModalOverlay(e)
    })
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal(e) {
    if (e.target) {
      e.preventDefault();
    }

    this.modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay(e) {
    if (e.target === this.modal && this._closeClickOverlay) {
      this.modal.style.display = "none";
    }
  }
}
