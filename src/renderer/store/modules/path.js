// path путь каталога
const state = {
  path: ['public']
}

const mutations = {
  // сохранить path путь каталога
  setPath (store, data) {
    store.path = data
  },
  // добавить новый элемент path путь каталога
  pushPath (store, data) {
    store.path.push(data)
  }
}

const actions = {

}
const getters = {
  // отобразить path путь каталога
  getPath: s => s.path,
  // для отравки по api нового пути каталога
  getPathString: s => s.path.slice(1).join('/')
}

export default {
  state,
  mutations,
  actions,
  getters
}
