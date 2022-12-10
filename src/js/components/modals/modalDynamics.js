import Modal from "./modal";

/**
 *  Модальное окна c привязкой к блоку
 * */
export default class ModalDynamics extends Modal{

  /**
   * Создает скрытый input
   * @return {Node}
   */
  static createInput() {
    const input = document.createElement('input')

    input.classList.add('sumbiot-input-dynamic')

    input.setAttribute('type','hidden')
    input.setAttribute('name','id')

    return input
  }

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggerSelector, options = {}) {

    super(triggerSelector,options)

    this._wrapperModalSelector = options.modalWrapper || '.sumbiot-wrapper'            // - родитель куда вставляем модальное окно
    this._wrapperElementSelector = options.elementWrapper || '[data-sumbiot-wrapper]'  // - родитель куда вставить input
    this._existsElementForPasteIdSelector = options.existsElementForPasteId            // - элемент уже существует в форме и готов с добавлению id
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.classList.contains(this._trigger.slice(1))) {
        this._show(e,target)

      }else if(target.parentElement.classList.contains(this._trigger.slice(1))) {
        this._show(e,target.parentElement)
      }

    })
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  _show(e,trigger){
    if (e.target) {
      e.preventDefault()
    }

    this.hideAllModals()

    this._modalPosition(trigger)

    this.modal.style.display = "block";
  }

  /**
   * Позицианирует модальное окно в нужное место
   * @param {HTMLElement} trigger - элемент который открывает модальное окно.
   * @return {void}
   */
  _modalPosition(trigger){

    this._elementPosition(trigger)

    if(!trigger.closest(this._wrapperModalSelector)) {
      trigger.parentElement.classList.add(this._wrapperModalSelector.slice(1))
    }

    this._wpapper = trigger.closest(this._wrapperModalSelector)
    this._wpapper.append(this.modal)
  }

  /**
   * Вставляет input или добавляет data-sumbiot-id в нужный элемент
   * @param {HTMLElement} trigger - элемент который открывает модальное окно.
   * @return {void}
   */
  _elementPosition(trigger) {
    let id = trigger.dataset.id,
        elementForPasteId  = this.modal.querySelector(this._existsElementForPasteIdSelector || '.sumbiot-input-dynamic')

    if(!elementForPasteId) {
      elementForPasteId = ModalDynamics.createInput()
      this.modal.querySelector(this._wrapperElementSelector).prepend(elementForPasteId)
    }

    this._existsElementForPasteIdSelector ? elementForPasteId.setAttribute('data-sumbiot-id',id) : elementForPasteId.setAttribute('value',id)
  }

}
