
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
        <div class="col-9 g-justify-items-left" title="${programName}.&#10Номер документа: ${cardNumber}&#10Аттестация закончилась: ${nextAttestationDate}">
          <span class="result__clip">
            ${programName}
          </span>
        </div>
        <div class="col-3">
          <span>
            <button class="button button--text js-edit-card-modal" type="button" data-sumbiot-target="#edit-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/edit_card">Продлить</button>
            <span class="p-relative d-inline-block">
              <button class="button button--text js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idCard}" data-id-user="${idUser}" data-custom-user="${customUser}" data-action="/deleteCard" title="Удалить удостоверение">x</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  `
}
