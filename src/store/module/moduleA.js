import textApi from '@/api/textApi'

const state = {
  name: 'i am a',
  count: 0,
  companyType: []
}
const getters = {
  getnames: state => state.name
}
const mutations = {
  changeName (state) {
    state.count++
    state.name = 'i am a' + state.count
  },
  changeNameByAjax (state, name) {
    state.name = 'i am ' + name
  },
  setCompanyType (state, companyType) {
    state.companyType = companyType
  }
}
const actions = {
  changeName ({commit}) {
    commit('changeName')
  },
  changeNameByText ({commit}, text) {
    commit('changeNameByAjax', text)
  },
  ajaxChangeName ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('changeNameByAjax', 'ajax')
        resolve()
      }, 1000)
    })
  },
  getCompanyType ({commit, state}) {
    return new Promise((resolve, reject) => {
      if (state.companyType.length > 0) {
        resolve()
      } else {
        textApi.getCompanyType((companyType) => {
          commit('setCompanyType', companyType)
          resolve()
        }, () => {
          commit('setCompanyType', [])
          reject()
        })
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
