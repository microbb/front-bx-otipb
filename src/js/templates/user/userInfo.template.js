import {cardTemplate} from "../card/сard.template";
import {trainingTemplate} from "../card/training.template";
import {cardRecertificationTemplate} from "../card/cardRecertification.template";

import {plugTemplate} from "../card/plug.template";

/**
 *  Шаблон информация о удостоверениях пользователя
 *  @param {Object} user - удостоверение
 *  @param {number} [user.idUser] - id
 *  @param {Object} [user.cards] -
 *  @param {Array} [user.training] -
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 3-из БХ без Hse
 *  @return {string}
 * */
export function userInfoTemplate({idUser,cards,training},
  {
    build = 0
  } = {}
) {

  /**
   * список действующих удостоверений
   * @return {string}
   */
  const renderCard = () => {
    if(cards && cards['NORMAL_DATE']){
      return cards['NORMAL_DATE'].map(card => cardTemplate(card)).join(' ')
    }else {
      return plugTemplate('Нет удостоверений')
    }
  }

  /**
   * список обучений
   * @return {string}
   */
  const renderTraining = () => {
    if(training.length){
      return training.map(training => trainingTemplate(training,{idUser})).join(' ')
    }else {
      return plugTemplate('Нет обучений')
    }
  }

  /**
   * список удостоверения на переаттестации
   * @return {string}
   */
  const renderRecertification = () => {
    if(cards && cards['OVER_DATE']){
      return cards['OVER_DATE'].map(card => cardRecertificationTemplate(card)).join(' ')
    }else {
      return plugTemplate('Нет удостоверений')
    }
  }

  /**
   * Конфигурация пользователя
   * @return {string}
   */
  const renderUserConfig = () => {

    // кастомный пользователь
    if(build === 1){
      return  `
        <button class="result__info-options-btn button button--icon js-edit-user-modal" type="button" data-sumbiot-target="#edit-user-modal" data-id="${idUser}" title="Редактировать сотрудника">
          <img class="result__img" src="assets/img/edit-user-icon.svg" width="22" height="22" alt="">
        </button>
        <span class="p-relative d-inline-block">
          <button class="result__info-options-btn button button--icon js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idUser}" data-action="/deleteUser" title="Удалить сотрудника">
            <img class="result__img" src="assets/img/remove-user-icon.svg" width="22" height="22" alt="">
          </button>
        </span>
      `
    }
    // существующий пользователь из BX
    else if (build === 2) {
      return  `
        <button class="result__info-options-btn button button--icon js-edit-hse-modal" type="button" data-sumbiot-target="#edit-hse-modal" data-id="${idUser}" title="Изменить должность HSE">
          <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/edit-document-icon.svg" width="22" height="22" alt="">
        </button>
      `
    }
    // существующий пользователь из BX без HSE
    else {
      return ``
    }
  }

  return `
    <div class="result__info-box">
      <div class="result__info-title">
        Удостоверение действующие

        <div class="result__info-options">
          ${renderUserConfig()}
        </div>
      </div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-5">Программа обучения</div>
            <div class="col-3">Номер документа</div>
            <div class="col-2">Дата след. аттестации</div>
            <div class="col-2">Опции</div>
          </div>
        </div>

        ${renderCard()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->

    <div class="result__info-box">
      <div class="result__info-title">Доступные обучения</div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-9">Программа обучения</div>
            <div class="col-3">Опции</div>
          </div>
        </div>

        ${renderTraining()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->

    <div class="result__info-box">
      <div class="result__info-title">Удостоверение на переаттестации</div>

      <div class="result__info-box-inner">

        <div class="result__row result__row--inner result__row--inner-header">
          <div class="row gx-0">
            <div class="col-9">Программа обучения</div>
            <div class="col-3">Опции</div>
          </div>
        </div>

        ${renderRecertification()}

      </div><!--.result__info-box-inner-->

    </div><!--./result__info-box-->
  `
}
