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
  },
  deleteCatalog (store, index) {
    store.catalog.splice(index, 1)
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
  },
  async addCatalog ({rootGetters, dispatch}, dataset) {
    const path = rootGetters['getPathString']
    const {data} = await axios.post(`${apiUrl}/api/file/${path}`, dataset, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    await dispatch('setCatalog')
    return data
  },
  async addDirective ({rootGetters, dispatch}, name) {
    const path = rootGetters['getPathString']
    const {data} = await axios.post(`${apiUrl}/api/catalog/${path}`, {name})
    await dispatch('setCatalog')
    return data
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
          name: elem.name,
          url: elem.url
        })
      })
    }
    return res
  },
  // eslint-disable-next-line no-empty-pattern
  async deleteCatalog ({state, rootGetters, commit}, index) {
    const path = rootGetters['getPathString']
    const elem = state.catalog[index].name
    if (state.catalog[index].type === 'Directive') {
      const {data} = await axios.delete(`${apiUrl}/api/catalog/${path}${elem}`)
      commit('deleteCatalog', index)
      return data
    } else {
      console.log(`${apiUrl}/api/file/${path}/${elem}`)
      const {data} = await axios.delete(`${apiUrl}/api/file/${path}/${elem}`)
      commit('deleteCatalog', index)
      return data
    }
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
