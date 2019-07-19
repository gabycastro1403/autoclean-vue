import Vue from 'vue'
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
    key: 'AIzaSyBhraXvMrtH2ASkZwHjN44KE-b7No3YHf4',
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
})

// Store.dispatch('getPost')
