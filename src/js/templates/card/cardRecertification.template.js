
/**
 *  Шаблон удостоверения на переаттестации
 *  @param {Object} card - удостоверение
 *  @param {number} [card.idCard] - id
 *  @param {string} [card.programName] - название удостоверения
 *  @param {string} [card.cardNumber] - номер документа
 *  @param {string} [card.nextAttestationDate] - дата следующий аттестации
 *  @param {Object} options - настройки
 *  @param {?number} [options.idUser] - id сотрудника
 *  @param {?number} [options.customUser] - кастомный или существующий сотрудник
 *  @return {string}
 * */
export function cardRecertificationTemplate({idCard,programName,cardNumber,nextAttestationDate},
  {
    idUser = null,
    customUser = null
  })
{

  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-9 g-justify-items-left" title="${programName || 'не заполнено'}.&#10Номер документа: ${cardNumber || 'не заполнено'}&#10Аттестация закончилась: ${nextAttestationDate || 'не заполнено'}">
          <span class="result__clip">
            ${programName || 'не заполнено'}
          </span>
        </div>
        <div class="col-3">
          <span class="result__options-card">
            <button class="button button--text js-edit-card-modal js-edit-card"" type="button" data-sumbiot-target="#edit-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/editCard">Продлить</button>
            <span class="p-relative d-inline-block">
              <button class="button button--text button--img-delete js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/deleteCard" title="Удалить удостоверение"></button>
            </span>
          </span>
        </div>
      </div>
    </div>
  `
}
