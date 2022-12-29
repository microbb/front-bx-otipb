import Modal from './library/sumbiot/modules/modals/components/modal'
import ModalDynamics from './library/sumbiot/modules/modals/components/modalDynamics'
import Accordion from './library/sumbiot/modules/accordion/components/accordion'
import DropdownSelect from './library/sumbiot/modules/dropdown/components/dropdownSelect'
import DropdownInput from "./library/sumbiot/modules/dropdown/components/dropdownInput";

import AddUserComponent from "./components/add-user.component";
import FilterComponent from "./components/filter.component";
import EditUserComponent from "./components/edit-user.component";
import DeleteUserOrCardComponent from "./components/delete-user-or-card.component";
import AddOrEditCardComponent from "./components/add-or-edit-card.component";
import AddOrEditHseComponent from "./components/add-or-edit-hse.component";
import SearchComponent from "./components/search.component";

import Visitor from "./components/visitor"
import Stretch from "./components/stretch";


window.addEventListener('DOMContentLoaded', () => {

  // window.BX = {
  //   TemplateFolder: '',
  //   message: function (path) {
  //     return this[path]
  //   }
  // }

  // выподающий список select
  const dropDownSelect = new DropdownSelect('.dropdown--select',{
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown--select .dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  })
  dropDownSelect.accept(Visitor.positionMod)
          .upgrade()

  // выподающий список поиск
  const dropDownInput = new DropdownInput('.dropdown--input',{
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown--input .dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  })

  // панель которая регулирует ширина выподающего списка
  new Stretch('.js-option-panel',
    '.dropdown__options',
    'dropdown__options--stretch')


  // модалка фильтр
  new Modal('.js-filter-modal',
    {modalGroup: '[data-sumbiot-modal-top]', closeClickOverlay: false})
            .accept(Visitor.modalsStandardMod)
            .upgrade()
  // модалка добавить сутрудника
  new Modal('.js-add-user-modal',
    {modalGroup: '[data-sumbiot-modal-top]', closeClickOverlay: false})
            .accept(Visitor.modalsStandardMod)
            .upgrade()

  // модалка редактировать сотрудника
  new ModalDynamics('.js-edit-user-modal',
    {modalSelector:'#edit-user-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(Visitor.editUserMod).upgrade()

  // модалка удалить сотрудника / удостоверение
  new ModalDynamics('.js-delete-user-and-card-modal',
    {modalSelector:'#delete-user-or-card-modal', closeClickOverlay: false})
    .accept(Visitor.modalsUnityDeleteMod).upgrade()

  // модалка добавить / редактировать / продлить удостоверение
  new ModalDynamics('.js-edit-card-modal',
    {modalSelector:'#edit-card-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(Visitor.modalsUnityMod).upgrade()

  // модалка добавление HSE
  new ModalDynamics('.js-add-hse-modal',
    {modalSelector:'#add-hse-modal', closeClickOverlay: false})
    .accept(Visitor.addHseMod).upgrade(dropDownSelect)

  // модалка редактировать HSE
  new ModalDynamics('.js-edit-hse-modal',
    {modalSelector:'#edit-hse-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(Visitor.editHseMod).upgrade()


  // аккардион
  new Accordion('.js-accordion', {contentActive: 'result__info--active', display: 'grid'})
                .accept(Visitor.accordionParentMod)
                .upgrade()


  // компонент добавления сотрудника
  new AddUserComponent('#add-user', {
    dropDown: dropDownSelect
  })
  // компонент редактировать сотрудника
  new EditUserComponent('#edit-user', {
    dropDown: dropDownSelect
  })

  // компонент добавить / редактировать / продлить удостоверение
  new AddOrEditCardComponent('#edit-card')

  // компонент удалить сотрудника / удостоверение
  new DeleteUserOrCardComponent('#delete-user-or-card')

  // компонент добавить должность HSE
  new AddOrEditHseComponent('#add-hse')

  // компонент редактировать должность HSE
  new AddOrEditHseComponent('#edit-hse')

  // компонент фильтр
  new FilterComponent('#filter', {
    dropDown: dropDownSelect
  })

  // компонент Поиск
  new SearchComponent('#search')

})


