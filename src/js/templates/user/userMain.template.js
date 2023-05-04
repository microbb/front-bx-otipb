import {userInfoTemplate} from "./userInfo.template";
import {userCardInfoTemplate} from "./userCardInfo.template";

/**
 *  Шаблон сотрудник
 *  @param {Object} user - сотрудник
 *  @param {Object} options - настройки
 *  @param {number} [options.build] - в какой конфигурации собирать сотрудника 1-кастомный, 2-из БХ, 0-из БХ без Hse
 *  @return {Element}
 * */
export function userMainTemplate(user,
  {build = 0} = {}
) {

  // тело элемента
  const $user = document.createElement('div')
  $user.classList.add('result__row','js-result-row')

  // внутренности элемента
  const htmlInUser = `
      <div class="row gx-0 js-accordion js-user-info">
        ${userInfoTemplate(user,{build})}
      </div><!--/.js-user-info-->

      <div class="result__info js-wrapper-modal">
        ${userCardInfoTemplate(user,{build})}
      </div><!--./result__info-->
  `

  $user.insertAdjacentHTML('afterbegin', htmlInUser)

  return $user
}
