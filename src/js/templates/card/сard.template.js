
/**
 *  Шаблон действующие удостоверение
 *  @param {Object} card - удостоверение
 *  @param {number} [card.idCard] - id
 *  @param {string} [card.programName] - название удостоверения
 *  @param {string} [card.cardNumber] - номер документа
 *  @param {string} [card.attestationDate] - дата аттестации
 *  @param {string} [card.nextAttestationDate] - дата следующий аттестации
 *  @param {Object} options - настройки
 *  @return {string}
 * */
export function cardTemplate({idCard,programName,cardNumber,attestationDate,nextAttestationDate}, options = {}) {

  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-5 g-justify-items-left" title="${programName}">
          <span class="result__clip">
            ${programName}
          </span>
        </div>
        <div class="col-3" title="Номер документа: ${cardNumber}&#10Дата аттестации: ${attestationDate}">
          <span class="result__clip text-align-center">
            ${cardNumber}
          </span>
        </div>
        <div class="col-2">${nextAttestationDate}</div>
        <div class="col-2">
          <span>
            <button class="button button--text js-edit-card-modal" type="button" data-sumbiot-target="#edit-card-modal" data-id="${idCard}" data-action="/editCard">Редактировать</button>
            <span class="p-relative d-inline-block">
              <button class="button button--text js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idCard}" data-action="/deleteCard" title="Удалить удостоверение">x</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  `
}
