// catalog путь каталога
const state = {
  catalog: []
}

const mutations = {
  // сохранить catalog путь каталога
  setCatalog (store, data) {
    store.catalog = data
  },
  // data {catalog- ссылка на каталог, value- значение активности}
  activeCatalog (store, data) {
    data.catalog = data.value
  }
}
const actions = {

}
const getters = {
  getCatalog: s => s.catalog
}

export default {
  state,
  mutations,
  actions,
  getters
}
