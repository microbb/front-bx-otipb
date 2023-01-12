import {userInfoTemplate} from "./userInfo.template";
import {userCardInfoTemplate} from "./userCardInfo.template";

/**
 *  Шаблон сотрудник
 *  @param {Object} user - сотрудник
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {string}
 * */
export function userMainTemplate(user,
  {build = 0} = {}
) {

  return `
    <div class="result__row js-result-row">

      <div class="row gx-0 js-accordion js-user-info">
        ${userInfoTemplate(user,{build})}
      </div><!--/.js-user-info-->

      <div class="result__info js-wrapper-modal">
        ${userCardInfoTemplate(user,{build})}
      </div><!--./result__info-->

    </div><!--./result__row-->
  `
}
