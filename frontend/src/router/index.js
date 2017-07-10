import Vue from 'vue'
import Router from 'vue-router'

import Template from '@/components/Template'

// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Template
    },
    {
      path: '/topic',
      name: 'Topic',
      component: YanTopic
    }
  ]
})
