import Vue from 'vue'
import Vuex from 'vuex'
import A from './moduleA'

Vue.use(Vuex)
const moduleB = {
  state: {
    name: 'i am a'
  }
}
const store = new Vuex.Store({
  modules: {
    a: A,
    b: moduleB
  }
})
export default store
