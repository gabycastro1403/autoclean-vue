import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

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
  template: '<App/>',
  components: {
    App
  }
});




