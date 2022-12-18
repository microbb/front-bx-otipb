/**
 *  Панель для выпадающего списка, для раскрытия списка по горизонтали
 * */
export default class Stretch {

  /**
   * Конструктор
   * @param {string} panelsSelector   - селектор панелей для выпадающего списка.
   * @param {string} stretchSelector  - селектор элемента над которым будет проводится модификация.
   * @param {string} activeClass      - класс модификатор для элемента над которым будет проводится модификация.
   */
  constructor(panelsSelector,stretchSelector,activeClass) {

    this._panelsElements = document.querySelectorAll(panelsSelector)
    this._stretchSelector = stretchSelector
    this._activeClass = activeClass

    this._init()
  }

  /**
   * Инициализация
   * @return {void}
   */
  _init(){
    this._stretchHandler()
  }

  /**
   * Обработчик события клика по панели
   * @return {void}
   */
  _stretchHandler(){

    this._panelsElements.forEach(panel => {
      let on = panel.querySelector('.option-panel__item-on'),
          off = panel.querySelector('.option-panel__item-off')

      on.addEventListener('click', (e) => {
        e.preventDefault()

        this._show(panel)
      })

      off.addEventListener('click', (e) => {
        e.preventDefault()

        this._hide(panel)
      })

    })

  }

  /**
   * Развернуть список по горизонтали
   * @return {void}
   */
  _show(panel){
    panel.closest(this._stretchSelector).classList.add(this._activeClass)
  }

  /**
   * Свернуть список по горизонтали
   * @return {void}
   */
  _hide(panel){
    panel.closest(this._stretchSelector).classList.remove(this._activeClass)
  }

}
