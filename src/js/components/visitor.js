import Accordion from "../library/sumbiot/modules/accordion/components/accordion";

/**
 *  Добавляет новую функциональность уже существующим классам, не изменяя исходный код класса
 * */
export default class Visitor {

  /**
   * Посититель для экземпляра модального окна которое реализует
   * редактировать / добавить / продлить
   * удостоверение
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static modalsUnity(instanceClass) {

    // метод объединения
    instanceClass.modalsUnity = function () {

      // изменяет заголовок
      const editTitle = (target) => {
        let btnText = target.innerText

        this.modal.querySelector('.modal__title').innerText = `${btnText || 'Редактировать'} удостоверение`
      }

      // изменяет обработчик
      const editAction = (target) => {
        this.modal.querySelector('form').action = target.dataset.action || ''
      }

      // добавляет user id
      const addUserId = (target) => {
        if(target.dataset.idUser) {
          const input = document.createElement('input')

          input.classList.add('js-input-user-id')

          input.setAttribute('type','hidden')
          input.setAttribute('name','id_user')
          input.setAttribute('value',target.dataset.idUser)

          this.modal.querySelector('form').prepend(input)
        }
      }

      // удаляет user id
      const deleteUserId = () => {
        const inputs = this.modal.querySelectorAll('input')

        for (let input of inputs) {
          if (input.classList.contains('js-input-user-id'))
            input.remove()
        }
      }

      document.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1)) ) {

          if (target.parentElement.classList.contains(this._trigger.slice(1)))
            target = target.parentElement

          try {

            deleteUserId()

            editTitle(target)

            editAction(target)

            addUserId(target)

          }catch (e) {

            console.log(e.message)

          }

        }

      })

    }
  }

  /**
   * Посититель для экземпляра аккрдиона которое реализует
   * переключение класса активности родителю
   * аккрдиона
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static accordionParentMod(instanceClass) {

    // метод переключение
    instanceClass.accordionParentMod = function () {

      // переключает класс
      const toggleParent = (target) => {

        document.querySelectorAll(this._triggerSelector).forEach(element => {

          if(element === target.closest(this._triggerSelector)){
            target.closest(this._triggerSelector).parentElement.classList.toggle('result__row--active')
          }else {
            element.parentElement.classList.remove('result__row--active')
          }

        })

      }

      document.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.closest(this._triggerSelector)) {

          try {

            toggleParent(target)

          }catch (e) {
            console.log(e.message)
          }

        }

      })

    }
  }

  static addHseMod(instanceClass) {

    // метод объединения
    instanceClass.addHseMod = function () {

      document.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.classList.contains(this._trigger.slice(1)) || target.parentElement.classList.contains(this._trigger.slice(1)) ) {

          e.stopPropagation()

        }

      },true)

    }
  }

}
