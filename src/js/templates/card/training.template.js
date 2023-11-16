import {attributeTemplate} from "../attribute.template";

/**
 *  Шаблон доступные обучения
 *  @param {Object} card - обучение
 *  @param {number} [card.ID] - id
 *  @param {string} [card.NAME] - название обучение
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @param {boolean} [options.isAccess] - в какой конфигурации собирать обучение true - администратор | false - редовой
 *  @return {string}
 * */
export function trainingTemplate({ID,NAME},
  {
    idUser = null,
    customUser = null,
    isAccess= true
  }
) {

  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col g-justify-items-left" title="${NAME || 'не заполнено'}">
          <span class="result__clip">
            ${NAME || 'не заполнено'}
          </span>
        </div>
        <div class="col-3">
          <button class="button button--text js-edit-card-modal" type="button" data-sumbiot-target="#edit-card-modal" data-id="${ID}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/addCard" title="${attributeTemplate(isAccess,'Нет прав доступа')}" ${attributeTemplate(isAccess,'disabled')}>Добавить</button>
        </div>
      </div>
    </div>
  `
}
