import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Home from '@/components/Home'
import Historial from '@/components/Historial'
import Pruebas from '@/components/Pruebas'
import Servicio from '@/components/Servicio'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/historial',
      name: 'Historial',
      component: Historial
    },
    {
      path: '/pruebas',
      name:'Pruebas',
      component: Pruebas
    },
    {
      path: '/servicio',
      name:'Servicio',
      component: Servicio
    }
  ]
})
