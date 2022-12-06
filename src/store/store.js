import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { stayStore } from './stay.store.js'
import { orderStore } from './order.store.js'
// import { orderStore } from './order.store.js'
 
export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    stayStore,
    orderStore,
    orderStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
