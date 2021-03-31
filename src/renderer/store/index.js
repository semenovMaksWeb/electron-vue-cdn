import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'
import modules from './modules'
export const apiUrl = 'http://localhost:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
