import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Home from '@/components/Home'
import Historial from '@/components/Historial'


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
    }
  ]
})
