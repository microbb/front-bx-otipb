import Modal from './components/modals/modal'
import ModalDynamics from "./components/modals/modalDynamics";

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
  // модалка удалить удостоверение
  new ModalDynamics('.js-delete-card-modal',{closeClickOverlay: false})
  // модалка добавление HSE
  new ModalDynamics('.js-add-hse-modal',{closeClickOverlay: false})
  // модалка редактировать HSE
  new ModalDynamics('.js-edit-hse-modal',{modalWrapper: '.js-wrapper-modal'})
})


