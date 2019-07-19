import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Home from '@/components/Home'
import Historial from '@/components/Historial'

import Servicio from '@/components/Servicio'

import firebase from 'firebase';


Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/historial',
      name: 'Historial',
      component: Historial,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/servicio',
      name:'Servicio',
      component: Servicio,
      meta: {
        requiresAuth: true
      }
    }
  ]
})


export default router;