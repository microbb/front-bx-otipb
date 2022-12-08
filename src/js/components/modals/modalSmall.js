import Modal from "./modal";

/**
 *  Модальное окно добавление и удаление
 * */
export default class ModalSmall  extends Modal{

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать.
   * @param {string} closeSelector   - селектор который закрывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector, modalSelector, closeSelector,options = {}) {
    super(triggerSelector, modalSelector, closeSelector,options);

    this._modal = document.body.removeChild(document.querySelector(modalSelector))
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

        if(this._modal.querySelector('.input-hidden')) {
          this._modal.querySelector('.input-hidden').remove()
        }

        this._modalPosition(item)


        this._modal.style.display = "block";
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

      console.log(this._modal)

      this._hideAllModals()

      this._modal.style.display = "none";

      this._parent.querySelector('.modal').remove()
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

        this._parent.querySelector('.modal').remove()
      }
    });

  }

  /**
   * Позицианирует модальное окно в нужное место
   * @param {HTMLElement} trigger - селектор который открывает модальное окно.
   * @return {void}
   */
  _modalPosition(trigger){
    let id = trigger.dataset.id,
        input = document.createElement('input')

    input.setAttribute('type','hidden')
    input.classList.add('input-hidden')
    input.setAttribute('name','id')
    input.setAttribute('value',id)

    this._modal.querySelector('.form').prepend(input)

    this._parent = trigger.parentElement

    this._parent.append(this._modal)
  }
}
