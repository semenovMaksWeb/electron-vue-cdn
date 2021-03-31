// catalog путь каталога
const state = {
  catalog: [
    {type: 'File', name: '1.png', active: false}
  ]
}

const mutations = {
  // сохранить catalog путь каталога
  setCatalog (store, data) {
    store.catalog = data
  },
  // data {index- index каталога, value- значение активности}
  activeCatalog (store, data) {
    store.catalog[data.index].active = !store.catalog[data.index].active
  },
  activeFalseCatalog (store, data) {
    store.catalog[data.index].active = false
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
