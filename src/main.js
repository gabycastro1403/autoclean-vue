import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

const config = {
  apiKey: "AIzaSyCtnnkI5WnROzwdlNfTpx3GZKgLfuFrnkg",
  authDomain: "autoclean-vue.firebaseapp.com",
  databaseURL: "https://autoclean-vue.firebaseio.com",
  projectId: "autoclean-vue",
  storageBucket: "autoclean-vue.appspot.com",
  messagingSenderId: "1062335017347",
  appId: "1:1062335017347:web:0934c0ec40a82ac4"
};

firebase.initializeApp(config);
export const db = firebase.firestore();
