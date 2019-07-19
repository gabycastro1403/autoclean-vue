import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import db from "./js/firebase";
import router from './router'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    user: {
      userName: null,
      carId: null,
      carColor: null,
      carType: null,
      email: null,
      uid: null,
      displayName: null
    },
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  action: {
    observer({
      commit
    }, payload) {
      if (payload != null) {
        commit('setUser', {
          email: payload.email,
          uid: payload.uid,

          displayName: payload.displayName
        })
      } else {
        commit('setUser', null)
      }
    }
  },
  getters: {}
});

export default store
