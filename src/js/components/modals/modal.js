
/**
 *  Модальное окно стандартное
 * */
export default class Modal{

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector,modalSelector,closeSelector,{
              closeClickOverlay = true // - будет ли закрываться окно по клику по подложки
              } = {}) {

    this._trigger = document.querySelectorAll(triggerSelector)
    this._modal = document.querySelector(modalSelector)
    this._close = this._modal.querySelector(closeSelector)

    this._windows = document.querySelectorAll('[data-modal]')
    this._closeClickOverlay = closeClickOverlay

    this._init()
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this._hideAllModals()

    this._showModal()

    this._closeModal()

    this._closeModalOverlay()
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

  /**
   * Показать модальное окно
   * @return {void}
   */
  _showModal() {
    this._trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }

        this._hideAllModals()

        this._modal.style.display = "block";

        setTimeout(() =>{
          item.blur()
        },150)

      });
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal() {
    this._close.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      this._hideAllModals()

      this._modal.style.display = "none";
    });

  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay() {
    this._modal.addEventListener('click', (e) => {
      if (e.target === this._modal && this._closeClickOverlay) {
        this._hideAllModals();

        this._modal.style.display = "none";
      }
    });

  }
}
