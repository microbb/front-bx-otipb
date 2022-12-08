import Modal from './components/modals/modal'
import ModalSmall from './components/modals/modalSmall'

window.addEventListener('DOMContentLoaded', () => {
  // модалка добавить сутрудника
  new Modal('[data-trigger="user-modal"]','[data-modal="user-modal"]','[data-close]')
  // модалка фильтр
  new Modal('[data-trigger="filter-modal"]','[data-modal="filter-modal"]','[data-close]')
  // модалка удалить сотрудника и удалить удостоверение
  new ModalSmall('[data-trigger="delete-modal"]','[data-modal="delete-modal"]','[data-close]',{closeClickOverlay: false})
  // модалка добавление HSE
  new ModalSmall('[data-trigger="add-hse-modal"]','[data-modal="add-hse-modal"]','[data-close]',{closeClickOverlay: false})
})


