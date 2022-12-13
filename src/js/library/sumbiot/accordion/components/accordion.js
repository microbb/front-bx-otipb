import AccordionCore from "../accordionCore";

/**
 *  Аккардион
 * */

export default class Accordion extends AccordionCore{

  /**
   * Конструктор
   * @param {string} triggersSelector - селектор который открывать  скрытый контент.
   * @param {Object=} options        - конфигурация.
   */
  constructor(triggersSelector,
              {
                headActive = '[data-sumbiot-headActive]',         // - активный класс пункта
                contentActive  = '[data-sumbiot-contentActive]'   // - активный класс контента
              } = {}) {

    super();

    this._trigger = triggersSelector
    this.headActive = headActive
    this.contentActive = contentActive

    this._init()
  }

  /**
   * Инициализация аккардиона
   * @return {void}
   */
  _init() {

    this._toggleHandler()

  }

  /**
   * Обработчик события переключения
   * @return {void}
   */
  _toggleHandler() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.closest(this._trigger)) {
        this._show(e)
      }
    })
  }

  /**
   * Обработчик события
   * @return {void}
   */




}
