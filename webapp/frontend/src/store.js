import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setState(state, payload){
      state.user = payload
    }
  },
  actions: {
    getAuth({ commit}){
      return apiService.getAuth().then((res) => {
        commit('setState', res)
      })
    }
  }
})
