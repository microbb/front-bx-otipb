
/**
 *  Родитель модальных окон
 * */
export default class ModalInterface {

  /**
   * Конструктор
   * @param {Object=} options - конфигурация.
   */
  constructor({
                closeClickOverlay = true
              } = {}) {

    this._windows = document.querySelectorAll('[data-modal]')
    this._closeClickOverlay = closeClickOverlay

    this._init()
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {

  }

  /**
   * Скрывает все модальные окна
   * @return {void}
   */
  _hideAllModals() {
    this._windows.forEach(modal => {
      modal.style.display = 'none';
      modal.classList.add('animated', 'fadeIn');
    })
  }


}
