
/**
 *  Заглушка
 *  @param {string} text - текст заглушки
 *  @return {string}
 * */
export function plugTemplate(text) {

  return `
    <div class="result__row result__row--inner">
      <div class="row gx-0">
        <div class="col-12">
              ${text}
        </div>
      </div>
    </div>
  `

}
