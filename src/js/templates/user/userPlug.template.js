
/**
 *  Заглушка для сотрудников
 *  @param {string} text - текст заглушки
 *  @return {string}
 * */
export function userPlugTemplate(text) {

  return `
    <div class="result__row js-result-row">
      <div class="row gx-0 result__empty">
        <div class="col-12 text-align-center d-block">
          ${text}
        </div>
      </div>
    </div><!--./result__row-->
  `

}
