import Modal from "./modal";

/**
 *  Модальное окно удаление
 * */
export default class ModalDelete  extends Modal{

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string | Object} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector, modalSelector, closeSelector,options = {}) {
    super(triggerSelector, modalSelector, closeSelector,options);

    this._modal = document.querySelector(modalSelector).cloneNode(true)
    this._close = this._modal.querySelector(closeSelector)

    console.log(this._modal, this._close)
  }

  /**
   * Инициализация модального окона
   * @return {void}
   */
  _init() {
    this._hideAllModals()

    this._trigger.forEach(item => {
      item.addEventListener('click', (e) => {

        this._showModal(e)

        this._parent = item.closest('[data-wrapper]')
        this._parent.append(this._modal)

        this._close = this._modal.querySelector('[data-close="close-modal"]')

        this._close.addEventListener('click', (e) => {
          this._closeModal(e)
        });

        this._modal.addEventListener('click', this._closeModalOverlay);



      });
    });

  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  _closeModal(e) {
    super._closeModal(e)

    this._parent.querySelector('[data-modal="delete-modal"]').remove()
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay = (e) => {
    if (e.target === this._modal && this._closeClickOverlay) {
      this._hideAllModals();

      this._modal.style.display = "none";
    }
  }

}
