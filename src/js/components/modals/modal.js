import ModalInterface from "./modalInterface";

/**
 *  Модальное окно стандартное
 * */
export default class Modal extends ModalInterface{

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector,modalSelector,closeSelector,options={}) {
    super(options);

    this._trigger = document.querySelectorAll(triggerSelector)
    this._modal = document.querySelector(modalSelector)
    this._close = document.querySelector(closeSelector)
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this._hideAllModals()

    this._trigger.forEach(item => {
      item.addEventListener('click', this._showModal);
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _showModal(e) {
    if (e.target) {
      e.preventDefault();
    }

    this._hideAllModals();

    this._modal.style.display = "block";
  }
}
