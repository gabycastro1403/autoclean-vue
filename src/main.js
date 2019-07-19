import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import Store from './store'
// import firebase from 'firebase'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  template: '<App/>',
  components: {
    App
  }
})

// Store.dispatch('getPost')
