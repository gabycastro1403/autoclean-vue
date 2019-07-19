import Vue from 'vue';
import Vuex from 'vuex';
// import firebase from 'firebase';
import db from "./js/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historial: {
      auto: '',
      fecha: null,
      geopointer: null,
      placas: ''
    },
    historialData: [],
    hisData: {
      idHistorial: ''
    }
  },
  mutations: {
    setHistorialData(state, historialData) {
      state.historialData = historialData
    }
  },
  action: {
    getPosts({
      commit
    }) {
      const posts = [];
      db.collection("historial").get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let historialData = doc.data();
            // historialData.idHistorial = doc.id;
            historialData.push(post);
          });
        })
      commit('setPosts', posts);
    },
  },
  getters: {}
});
