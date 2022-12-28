import PaginationCore from "../paginationCore";

/**
 *  Постраничная навигация
 * */
export default class Pagination extends PaginationCore{

  /**
   * Конструктор
   * @param {string} paginationInSelector - куда на странице вставить навигацию.
   * @param {string} resultInSelector - куда на странице вставить результат выборку.
   * @param {Array} listElements - список элементов.
   * @param {Object=} options - конфигурация.
   * @param {number} [options.perpage] - количество элементов на странице
   * @param {number} [options.page] - с какой страницы начинать (активная)
   */
  constructor(paginationInSelector,resultInSelector,listElements,
              {
                perpage = 3,
                page = 1
              } = {}) {

    super()

    this.paginationInSelector = paginationInSelector
    this.$paginationInElement = document.querySelector(paginationInSelector)
    this.$resultInElement = document.querySelector(resultInSelector)

    this._listElements = listElements
    this._countListElements = this._listElements.length || 0 // сколько всего элементов

    this._perpage = perpage // сколько показывать на странице

    this._pagesCount = Math.ceil(this._countListElements / this._perpage); // кол-во страниц
    if(!this._pagesCount) this._pagesCount = 1; // минимум 1 страница

    this._page = page // активная страница
    if(this._page > this._pagesCount) this._page = this._pagesCount; // если запрошеная страница больше максимума

    if(this._pagesCount > 1) this._init() // если больше 1 страницы инициализируем постраничную навигацию
  }

  /**
   * Инициализация постраничной навигация
   * @return {void}
   */
  _init() {
      this._paginationCreate()

      this._switchingHandler()
  }

  /**
   * Обработчик события клика по элементу который переключает страницы
   * @return {void}
   */
  _switchingHandler() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.classList.contains('pagination__btn') && target.closest(this.paginationInSelector) || target.parentElement.classList.contains('pagination__btn') && target.closest(this.paginationInSelector)) {
        e.preventDefault()

        this._switchPage(target)

      }
    })
  }

  /**
   * Переключить страницу
   * @return {void}
   */
  _switchPage(btn) {
    this._page = +btn.dataset.page

    let start = (this._page - 1) * this._perpage,
        end = start + this._perpage

    let resSlice = this._listElements.slice(start, end)

    this.$resultInElement.innerHTML = ''
    this.$resultInElement.insertAdjacentHTML('beforeend', resSlice.join(''))

    this.$paginationInElement.querySelector('.pagination').remove()
    this._paginationCreate()
  }

  /**
   * Создаем Html код для постраничной навигации и помещаем на страницу
   * @return {void}
   */
  _paginationCreate(){
    const pagination = document.createElement('div')
          pagination.classList.add('pagination')

    let startPage = (this._page > 3) ? `<button type="button" class="pagination__btn" data-page="1">1</button>` : '',
        endPage = (this._page < (this._pagesCount - 2)) ? `<button type="button" class="pagination__btn" data-page="${this._pagesCount}">${this._pagesCount}</button>` : '',

        page4left = (this._page - 4 > 1) ? `<span class="pagination__plug">...</span>` : '',
        page3left = (this._page - 3 > 1) ? `<button type="button" class="pagination__btn" data-page="${this._page - 3}">${this._page - 3}</button>` : '',
        page2left = (this._page - 2 > 0) ? `<button type="button" class="pagination__btn" data-page="${this._page - 2}">${this._page - 2}</button>` : '',
        page1left = (this._page - 1 > 0) ? `<button type="button" class="pagination__btn" data-page="${this._page - 1}">${this._page - 1}</button>` : '',

        page4right = (this._page + 4 < this._pagesCount) ? `<span class="pagination__plug">...</span>` : '',
        page3right = (this._page + 3 < this._pagesCount) ? `<button type="button" class="pagination__btn" data-page="${this._page + 3}">${this._page + 3}</button>` : '',
        page2right = (this._page + 2 <= this._pagesCount) ? `<button type="button" class="pagination__btn" data-page="${this._page + 2}">${this._page + 2}</button>` : '',
        page1right = (this._page + 1 <= this._pagesCount) ? `<button type="button" class="pagination__btn" data-page="${this._page + 1}">${this._page + 1}</button>` : '',

        pageActive = `<button type="button" class="pagination__btn pagination__btn--active">${this._page}</button>`

    pagination.innerHTML = startPage + page4left + page3left + page2left + page1left + pageActive + page1right + page2right + page3right + page4right + endPage

    this.$paginationInElement.append(pagination)
  }

}
