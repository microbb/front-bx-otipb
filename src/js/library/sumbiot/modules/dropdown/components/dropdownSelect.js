import Dropdown from "./dropdown";

/**
 *  Выподающий список Select
 * */
export default class DropdownSelect extends Dropdown {

  /**
   * Конструктор
   * @param {string} dropdownSelector - селектор выподающего списка.
   * @param {Object=} options         - конфигурация.
   */
  constructor(dropdownSelector,options = {}) {

    super(dropdownSelector,options);

  }

}
