/**
 *  От выбора в A(первом селект), зависит наполнения Б(второго селекте)
 * */
export default class ChainingSelectInFormPlugin {

  /**
   * Конструктор
   * @param {string | Element} form  - форма в корорый надо объединить два выподающий списка.
   * @param {Object} selectA         - выподающий спосок A
   * @param {string} [selectA.selectorA] - селектор выподающего списка А
   * @param {string} [selectA.selectATriggerSelector] - сетектор для запуска действия в выподающим списке А
   * @param {Object} selectB         - выподающий спосок В
   * @param {string} [selectB.selectorB]  -  селектор выподающего списка В
   * @param {Object} [selectB.resetParams]  - элемента для сброса
   * @param {string} [selectB.resetParams.activeOption]  - активный пункт
   * @param {string} [selectB.resetParams.options]  - пункты списка
   * @param {string} [selectB.resetParams.input]  - input для отправки на сервер
   */
  constructor(form,
              {
                selectorA = '[data-sumbiot-selectA]',
                selectATriggerSelector = '.dropdown__item',
              } = {},
              {
                selectorB = '[data-sumbiot-selectB]',
                resetParams: {
                  activeOption = '.js-dropdown__toggle',
                  options = '.dropdown__item',
                  input = '.sumbiot-input-select'
                }
              } = {}) {

    this.$form = form.tagName ? form : document.querySelector(form)

    this.$selectA = this.$form.querySelector(selectorA)
    this.selectATriggerSelector = selectATriggerSelector

    this.$selectB = this.$form.querySelector(selectorB)
    this.resetParams = resetParams

    this._init()
  }

  /**
   * Инициализация плагина
   * @return {void}
   */
  _init() {

    this._handlerEvent()

  }

  /**
   * Обработчик событий
   * @return {void}
   */
  _handlerEvent() {

    this.$selectA.addEventListener('click', (e) => {
      let target = e.target;

      if (target && target.classList.contains(this.selectATriggerSelector.slice(1)) || target && target.parentElement.classList.contains(this.selectATriggerSelector.slice(1)) ) {
        e.preventDefault()

        if (target.parentElement.classList.contains(this.selectATriggerSelector.slice(1))){
          target = target.parentElement
        }

        this._fillSelectB(target)
      }
    })

  }

  /**
   * Заполнить выподающий список B
   * @param {HTMLElement} option - пункт списка в А селекте
   * @return {void}
   */
  _fillSelectB(option) {
    let idSelectA = option.dataset.selectOption,
        formData = new FormData()

    formData.append('idDivision',idSelectA)

    this._resetSelectB()
  }

  /**
   * Сброс параметров у выподающий списока B
   * @return {void}
   */
  _resetSelectB() {
    let toggle = this.$selectB.querySelector(this.resetParams.activeOption),
        options = this.$selectB.querySelectorAll(this.resetParams.options),
        input = this.$selectB.parentElement.querySelector(this.resetParams.input)

    // активный пункт
    toggle.innerText = ''
    toggle.removeAttribute('title')

    // пункты списка
    options.forEach(option => {
      option.remove()
    })

    // input
    input.setAttribute('value','')
  }

}
