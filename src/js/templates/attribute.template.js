
/**
 *  Шаблон добавления атрибутов в зависимости от прав доступа
 *  @param {boolean} isAccess - права
 *  @param {string} accessFalse - атрибут если есть права
 *  @param {string} accessTrue - атрибут если нет права
 *  @return {string}
 * */
export function attributeTemplate(isAccess= false , accessFalse = '', accessTrue = '') {

  if(isAccess) {
    return accessTrue
  }

  return accessFalse
}
