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
  }
}
const actions = {
  activeCatalog ({commit}, data) {
    commit('activeCatalog', data)
  },
  setCatalog ({commit}) {
    const data = []
    commit('setCatalog', data)
  }
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
