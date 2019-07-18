import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Historial from '@/components/Historial'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/historial',
    name: 'Historial',
    component: Historial
  }]
})
