
/**
 *  Шаблон доступные обучения
 *  @param {Object} card - обучение
 *  @param {number} [card.ID] - id
 *  @param {string} [card.NAME] - название обучение
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @return {string}
 * */
export function trainingTemplate({ID,NAME},
  {
    idUser = null,
    customUser = null
  }
) {

  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col g-justify-items-left" title="${NAME}">
          <span class="result__clip">
            ${NAME}
          </span>
        </div>
        <div class="col-3">
          <button class="button button--text js-edit-card-modal" type="button" data-sumbiot-target="#edit-card-modal" data-id="${ID}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/addCard">Добавить</button>
        </div>
      </div>
    </div>
  `
}
