const state = {
  path: ['public']
}

const mutations = {
  setPath (store, data) {
    store.path = data
  },
  pushPath (store, data) {
    store.path.push(data)
  }
}

const actions = {

}
const getters = {
  getPath: s => s.path,
  getPathString: s => s.path.join('/')
}

export default {
  state,
  mutations,
  actions,
  getters
}
