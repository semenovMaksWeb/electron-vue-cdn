// path путь каталога
const state = {
  check: false,
  menu: {
    active: false,
    index: null,
    left: 0,
    top: 0
  }
}

const mutations = {
  setCheck (store, value) {
    store.check = value
  },
  setMenu (store, data) {
    store.menu.active = data.active
    store.menu.left = data.left
    store.menu.top = data.top
  }

}

const actions = {

}
const getters = {
  getMenu: s => s.menu,
  getCheck: s => s.check
}

export default {
  state,
  mutations,
  actions,
  getters
}
