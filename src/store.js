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
  getters: {
    isAUser(state) {
      if (state.user === null || state.user === "" || state.user === undefined) {
        console.log("no a user");
        return false;
      } else {
        console.log("there's a user");
        router.replace("/");
        return true;
      }
    }
  }
});

export default store
