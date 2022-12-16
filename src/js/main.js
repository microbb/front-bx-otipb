import Modal from './library/sumbiot/modules/modals/components/modal'
import ModalDynamics from './library/sumbiot/modules/modals/components/modalDynamics'
import Accordion from './library/sumbiot/modules/accordion/components/accordion'
import Dropdown from './library/sumbiot/modules/dropdown/components/dropdown'
import DropdownSelect from './library/sumbiot/modules/dropdown/components/dropdownSelect'

import Visitor from "./components/visitor"

window.addEventListener('DOMContentLoaded', () => {
  // модалка фильтр
  new Modal('.js-filter-modal')
  // модалка добавить сутрудника
  new Modal('.js-add-user-modal')
  // модалка редактировать сотрудника
  new ModalDynamics('.js-edit-user-modal',{modalWrapper: '.js-wrapper-modal'})
  // модалка удалить сотрудника
  new ModalDynamics('.js-delete-user-modal',{closeClickOverlay: false})

  // модалка добавить / редактировать / продлить удостоверение
  new ModalDynamics('.js-edit-card-modal',{modalWrapper: '.js-wrapper-modal'})
                    .accept(Visitor.modalsUnity)
                    .modalsUnity()

  // модалка удалить удостоверение
  new ModalDynamics('.js-delete-card-modal',{closeClickOverlay: false})
  // модалка добавление HSE
  new ModalDynamics('.js-add-hse-modal',{closeClickOverlay: false})
                    .accept(Visitor.addHseMod)
                    .addHseMod()

  // модалка редактировать HSE
  new ModalDynamics('.js-edit-hse-modal',{modalWrapper: '.js-wrapper-modal'})

  // аккардион
  new Accordion('.js-accordion', {contentActive: 'result__info--active', display: 'grid'})
                .accept(Visitor.accordionParentMod)
                .accordionParentMod()

  // выподающий список
  new Dropdown('.dropdown-sumbiot')

  // выподающий список
  new DropdownSelect('.dropdown',{
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsSelector: '.dropdown__options'
  })
})


