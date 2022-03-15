import Vue from 'vue'
import Vuex from 'vuex'
import application from '@/store/modules/application.js'

Vue.use(Vuex)

function initialState() {
  return {}
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
  },
  modules: {
    application
  }
})
