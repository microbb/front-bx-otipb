import {cardTemplate} from "../card/card.template";
import {trainingTemplate} from "../card/training.template";
import {cardRecertificationTemplate} from "../card/cardRecertification.template";
import {attributeTemplate} from "../attribute.template";

import {cardPlugTemplate} from "../card/cardPlug.template";

/**
 *  Шаблон информация о удостоверениях пользователя
 *  @param {Object} user - сотрудник
 *  @param {number} [user.idUser] - id
 *  @param {Object} [user.cards] - обьект с действующими ['NORMAL_DATE'] и просрочеными ['OVER_DATE'] удостоверениями
 *  @param {Array} [user.training] - обучения
 *  @param {number} [user.customUser] - обучения
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @param {boolean} [options.isAccess] - в какой конфигурации собирать сотрудника true - администратор | false - редовой
 *  @return {string}
 * */
export function userCardInfoTemplate({idUser,cards,training,customUser},
                                     {
                                       build = 0,
                                       isAccess = true
                                     } = {}
) {

  /**
   * список действующих удостоверений
   * @return {string}
   */
  const renderCard = () => {
    if(cards && cards['NORMAL_DATE']){
      return cards['NORMAL_DATE'].map(card => cardTemplate(card,{idUser,customUser,isAccess})).join(' ')
    }else {
      return cardPlugTemplate('Нет удостоверений')
    }
  }

  /**
   * список обучений
   * @return {string}
   */
  const renderTraining = () => {
    if(training && training.length){
      return training.map(training => trainingTemplate(training,{idUser,customUser,isAccess})).join(' ')
    }else {
      return cardPlugTemplate('Нет обучений')
    }
  }

  /**
   * список удостоверения на переаттестации
   * @return {string}
   */
  const renderRecertification = () => {
    if(cards && cards['OVER_DATE']){
      return cards['OVER_DATE'].map(card => cardRecertificationTemplate(card,{idUser,customUser,isAccess})).join(' ')
    }else {
      return cardPlugTemplate('Нет удостоверений')
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
        <button class="result__info-options-btn button button--icon js-edit-user-modal" type="button" data-sumbiot-target="#edit-user-modal" data-id="${idUser}" title="${attributeTemplate(isAccess,'Нет прав доступа','Редактировать сотрудника')}" ${attributeTemplate(isAccess,'disabled')}>
          <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/edit-user-icon.svg" width="22" height="22" alt="">
        </button>
        <span class="p-relative d-inline-block">
          <button class="result__info-options-btn button button--icon js-delete-user-and-card-modal" type="button" data-sumbiot-target="#delete-user-or-card-modal" data-id="${idUser}" data-action="/deleteUser" title="${attributeTemplate(isAccess,'Нет прав доступа','Удалить сотрудника')}" ${attributeTemplate(isAccess,'disabled')}>
            <img class="result__img" src="${BX.message('TemplateFolder')}/assets/img/remove-user-icon.svg" width="22" height="22" alt="">
          </button>
        </span>
      `
    }
    // существующий пользователь из BX
    else if (build === 2) {
      return  `
        <button class="result__info-options-btn button button--icon js-edit-hse-modal" type="button" data-sumbiot-target="#edit-hse-modal" data-id="${idUser}" title="${attributeTemplate(isAccess,'Нет прав доступа','Изменить должность HSE')}" ${attributeTemplate(isAccess,'disabled')}>
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
