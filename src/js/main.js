import Modal from './library/sumbiot/modules/modals/components/modal';
import ModalDynamics from './library/sumbiot/modules/modals/components/modalDynamics';
import Accordion from './library/sumbiot/modules/accordion/components/accordion';
import DropdownSelect from './library/sumbiot/modules/dropdown/components/dropdownSelect';
import DropdownInput from "./library/sumbiot/modules/dropdown/components/dropdownInput";

import FormAddUserComponent from "./components/form-add-user.component";
import FormFilterComponent from "./components/form-filter.component";
import FormEditUserComponent from "./components/form-edit-user.component";
import FormDeleteUserOrCardComponent from "./components/form-delete-user-or-card.component";
import FormAddOrEditCardComponent from "./components/form-add-or-edit-card.component";
import FormAddOrEditHseComponent from "./components/form-add-or-edit-hse.component";
import FormSearchComponent from "./components/form-search.component";
import ResultFilterComponent from "./components/result-filter.component";
import ResultMainComponent from "./components/result-main.component";
import ResultSearchComponent from "./components/result-search.component";

import StretchInSelectPlugin from "./plugin/stretch-in-select.plugin";
import SearchInSelectPlugin from "./plugin/search-in-select.plugin";

import VisitorPattern from "./components/visitor.pattern";

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
  dropDownSelect.accept(VisitorPattern.positionMod)
          .upgrade()

  // выподающий список поиск
  new DropdownInput('.dropdown--input',{
    dropdownToggleSelector: '.dropdown__toggle',
    dropdownOptionsWrapperSelector: '.dropdown--input .dropdown__options',
    dropdownOptionSelector: '.dropdown__item'
  })

  // панель которая регулирует ширина выподающего списка
  new StretchInSelectPlugin('.js-option-panel',
    '.dropdown__options',
    'dropdown__options--stretch')

  // панель которая реализует поиск выподающего списка
  new SearchInSelectPlugin('.js-option-panel','.dropdown__search-box')

  // модалка фильтр
  new Modal('.js-filter-modal',
    {modalGroup: '[data-sumbiot-modal-top]', closeClickOverlay: false})
            .accept(VisitorPattern.modalsStandardMod)
            .upgrade()
  // модалка добавить сутрудника
  new Modal('.js-add-user-modal',
    {modalGroup: '[data-sumbiot-modal-top]', closeClickOverlay: false})
            .accept(VisitorPattern.modalsStandardMod)
            .upgrade()

  // модалка редактировать сотрудника
  new ModalDynamics('.js-edit-user-modal',
    {modalSelector:'#edit-user-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(VisitorPattern.editUserMod).upgrade()

  // модалка удалить сотрудника / удостоверение
  new ModalDynamics('.js-delete-user-and-card-modal',
    {modalSelector:'#delete-user-or-card-modal', closeClickOverlay: false})
    .accept(VisitorPattern.modalsUnityDeleteMod).upgrade()

  // модалка добавить / редактировать / продлить удостоверение
  new ModalDynamics('.js-edit-card-modal',
    {modalSelector:'#edit-card-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(VisitorPattern.modalsUnityMod).upgrade()

  // модалка добавление HSE
  new ModalDynamics('.js-add-hse-modal',
    {modalSelector:'#add-hse-modal', closeClickOverlay: false})
    .accept(VisitorPattern.addHseMod).upgrade(dropDownSelect)

  // модалка редактировать HSE
  new ModalDynamics('.js-edit-hse-modal',
    {modalSelector:'#edit-hse-modal', modalWrapper: '.js-wrapper-modal', closeClickOverlay: false})
    .accept(VisitorPattern.editHseMod).upgrade()


  // аккардион
  new Accordion('.js-accordion', {contentActive: 'result__info--active', display: 'grid'})
                .accept(VisitorPattern.accordionParentMod)
                .upgrade()


  // компонент вывод всех сотрудников на главной
  const mainResult = new ResultMainComponent('#main-result')
  // компонент вывод результатов работы фильтра
  const filterResult = new ResultFilterComponent('#filter-result')
  // компонент вывод результатов работы поиска
  const searchResult = new ResultSearchComponent('#search-result')

  // компонент добавления сотрудника
  new FormAddUserComponent('#add-user', {
    dropDown: dropDownSelect,
    partners: [
      {name: 'mainResult', component: mainResult},
      {name: 'filterResult', component: filterResult},
      {name: 'searchResult', component: searchResult}
    ]
  })
  // компонент редактировать сотрудника
  new FormEditUserComponent('#edit-user', {
    dropDown: dropDownSelect
  })

  // компонент добавить / редактировать / продлить удостоверение
  new FormAddOrEditCardComponent('#edit-card')

  // компонент удалить сотрудника / удостоверение
  new FormDeleteUserOrCardComponent('#delete-user-or-card', {
    partners: [
      {name: 'mainResult', component: mainResult},
      {name: 'filterResult', component: filterResult},
      {name: 'searchResult', component: searchResult}
    ]
  })

  // компонент добавить должность HSE
  new FormAddOrEditHseComponent('#add-hse')

  // компонент редактировать должность HSE
  new FormAddOrEditHseComponent('#edit-hse')

  // компонент фильтр
  new FormFilterComponent('#filter', {
    dropDown: dropDownSelect,
    partners: [
      {name: 'mainResult', component: mainResult},
      {name: 'filterResult', component: filterResult},
      {name: 'searchResult', component: searchResult}
    ]
  })

  // компонент Поиск
  new FormSearchComponent('#search-otipb', {
    partners: [
      {name: 'mainResult', component: mainResult},
      {name: 'filterResult', component: filterResult},
      {name: 'searchResult', component: searchResult}
    ]
  })

})


