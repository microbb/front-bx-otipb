import Modal from './library/sumbiot/modules/modals/components/modal'
import ModalDynamics from './library/sumbiot/modules/modals/components/modalDynamics'
import Accordion from './library/sumbiot/modules/accordion/components/accordion'
import DropdownSelect from './library/sumbiot/modules/dropdown/components/dropdownSelect'

import Visitor from "./components/visitor"
import Stretch from "./components/stretch";
import AddUserComponent from "./components/add-user.component";

window.addEventListener('DOMContentLoaded', () => {

  // выподающий список
  const dropDown = new DropdownSelect('.dropdown',{
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  })
  dropDown.accept(Visitor.positionMod)
          .upgrade()

  // панель которая регулирует ширина выподающего списка
  new Stretch('.js-option-panel',
    '.dropdown__options',
    'dropdown__options--stretch')

  // модалка фильтр
  new Modal('.js-filter-modal')
            .accept(Visitor.modalsStandardMod)
            .upgrade()
  // модалка добавить сутрудника
  new Modal('.js-add-user-modal')
            .accept(Visitor.modalsStandardMod)
            .upgrade()

  // модалка редактировать сотрудника
  new ModalDynamics('.js-edit-user-modal',{modalWrapper: '.js-wrapper-modal'})
                    .accept(Visitor.editUserMod)
                    .upgrade()
  // модалка удалить сотрудника / удостоверение
  new ModalDynamics('.js-delete-user-and-card-modal',{closeClickOverlay: false})
                    .accept(Visitor.modalsUnityDeleteMod)
                    .upgrade()
  // модалка добавить / редактировать / продлить удостоверение
  new ModalDynamics('.js-edit-card-modal',{modalWrapper: '.js-wrapper-modal'})
                    .accept(Visitor.modalsUnityMod)
                    .upgrade()
  // модалка добавление HSE
  new ModalDynamics('.js-add-hse-modal',{closeClickOverlay: false})
                    .accept(Visitor.addHseMod)
                    .upgrade(dropDown)
  // модалка редактировать HSE
  new ModalDynamics('.js-edit-hse-modal',{modalWrapper: '.js-wrapper-modal'})
                    .accept(Visitor.editHseMod)
                    .upgrade()

  // аккардион
  new Accordion('.js-accordion', {contentActive: 'result__info--active', display: 'grid'})
                .accept(Visitor.accordionParentMod)
                .upgrade()


  new AddUserComponent('#add-user')
})


