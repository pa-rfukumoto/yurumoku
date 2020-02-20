import Vue from "vue";
import Vuex from "vuex";
import { apiService } from "./services/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setState(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    login({ dispatch }, payload) {
      return apiService
        .login({
          email: payload.email,
          password: payload.password
        })
        .then(res => {
          dispatch("getAuth");
        });
    },
    getAuth({ commit }) {
      apiService.getAuth().then(res => {
        commit("setState", res);
      });
      return;
    }
  }
});
