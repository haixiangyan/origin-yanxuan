import Vue from 'vue'
import Router from 'vue-router'

import Template from '@/components/Template'

// 引入首页组件
import YanHome from '@/components/pages/Home/Home'
// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: YanHome
    },
    {
      path: '/topic',
      name: 'Topic',
      component: YanTopic
    }
  ]
})
