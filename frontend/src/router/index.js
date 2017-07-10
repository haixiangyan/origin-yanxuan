import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Template
    }
  ]
})
