import Modal from './components/modals/modal'
import ModalDynamics from "./components/modals/modalDynamics";

window.addEventListener('DOMContentLoaded', () => {
  // модалка добавить сутрудника
  new Modal('.js-add-user-modal')
  // модалка фильтр
  new Modal('.js-filter-modal')
  // // модалка удалить сотрудника и удалить удостоверение
  new ModalDynamics('.js-delete-user-modal',{closeClickOverlay: false})
  // // модалка добавление HSE
  // new ModalSmall('[data-trigger="add-hse-modal"]','[data-modal="add-hse-modal"]','[data-close]',{closeClickOverlay: false})


  // new ModalPosition('[data-trigger="delete-modal"]','[data-modal="delete-modal"]','[data-close]',{closeClickOverlay: false})
})


