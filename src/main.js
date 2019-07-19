import Vue from 'vue'
import Vuex from "vuex";
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false;

// import firebase from 'firebase'

Vue.use(Vuex)

Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdtx7Iy5EFgi_uqEth127RBmycCGF2eTk',
    libraries: 'places', 
    installComponents :  true 
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});

// Store.dispatch('getPost')
