// catalog путь каталога
import axios from 'axios'
import {apiUrl} from '../index'
const state = {
  catalog: []
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
  async setCatalog ({commit, dispatch, rootGetters}) {
    const path = rootGetters['getPathString']
    const {data} = await axios.get(`${apiUrl}/api/file/${path}`)
    if (data.data.children) {
      const res = await dispatch('mapCatalog', data.data.children)
      commit('setCatalog', res)
    } else {
      commit('setCatalog', null)
    }

    //
  },
  // eslint-disable-next-line no-empty-pattern
  mapCatalog ({}, data) {
    const res = []
    if (data.length > 0) {
      data.forEach(elem => {
        let type
        if (elem.type === 'catalog') {
          type = 'Directive'
        } else {
          type = 'File'
        }
        res.push({
          type: type,
          name: elem.name
        })
      })
    }
    return res
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
