console.log("Тест")

import Modal from './components/modals/modal'
import ModalDelete from './components/modals/modalDelete'

// модалка добавить сутрудника
new Modal('[data-trigger="user-modal"]','[data-modal="user-modal"]','[data-close="close-modal"]')
// модалка фильтр
new Modal('[data-trigger="filter-modal"]','[data-modal="filter-modal"]','[data-close="close-modal"]')

let t = new ModalDelete('[data-trigger="delete-modal"]','[data-modal="delete-modal"]','[data-close="close-modal"]')

console.dir(t)
