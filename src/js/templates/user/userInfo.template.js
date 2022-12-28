
/**
 *  Шаблон информация о пользователе
 *  @param {Object} user - сотрудник
 *  @param {number} [user.idUser] - id
 *  @param {string} [user.fio] - ФИО
 *  @param {string} [user.division] - дивизион
 *  @param {string} [user.department] - отдел
 *  @param {string} [user.work] - названия должности
 *  @param {string} [user.status] - названия должности
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {string}
 * */
export function userInfoTemplate({idUser,fio,division,department,work,status},
                                 {build = 0} = {}
) {

  /**
   * Конфигурация пользователя
   * @return {string}
   */
  const renderUserConfig = () => {

    // кастомный пользователь
    if(build === 1){
      return  `
        <div class="col-4 g-justify-items-left js-matrix-work-hse" title="${work || 'не заполнено'}">
          <span class="result__clip">
            ${work || 'не заполнено'}
          </span>
        </div>
      `
    }
    // существующий пользователь из BX
    else if (build === 2) {
      return  `
        <div class="col-4 g-justify-items-left js-matrix-work-hse" title="${work || 'не заполнено'}">
          <span class="result__clip">
            ${work || 'не заполнено'}
          </span>
        </div>
      `
    }
    // существующий пользователь из BX без HSE
    else {
      return `
        <div class="col-4 js-matrix-work-hse">
          <span class="p-relative d-inline-block">
            <button class="button button--icon js-add-hse-modal" type="button" data-sumbiot-target="#add-hse-modal" data-id="2" title="Добавить должность HSE">
              <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/add-document-icon.svg" width="18" height="18" alt="">
            </button>
          </span>
        </div>
      `
    }
  }

  return `
    <div class="col-1" title="ID: ${idUser}"></div>
    <div class="col-2" title="Отдел: ${department || 'не заполнено'}">
      <span class="result__clip text-align-center">
        ${division || 'не заполнено'}
      </span>
    </div>
    <div class="col-3 g-justify-items-left" title="${fio || 'не заполнено'}">
      <span class="result__clip">
        ${fio || 'не заполнено'}
      </span>
    </div>
    ${renderUserConfig()}
    <div class="col-1">${status || 'не заполнено'}</div>
    <div class="col-1">
      <button class="result__options-arrow button button--arrow" type="button" title="Подробно"></button>
    </div>
  `
}
