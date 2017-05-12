import Vue from 'vue'
import Vuex from 'vuex'
import A from './module/moduleA' // test

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'i am state',
    isLoading: false
  },
  getters: {
    getname: state => state.name
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  modules: {
    a: A
  }
})
export default store
