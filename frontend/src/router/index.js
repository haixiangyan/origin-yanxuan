import Vue from 'vue'
import Router from 'vue-router'

import Template from '@/components/Template'

// 引入首页组件
import YanHome from '@/components/pages/Home/Home'
// 引入首页的推荐组件
import YanRecommend from '@/components/pages/Home/Recommend/Recommend'

// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/recommend',
      component: YanHome,
      children: [
        {
          path: 'recommend',
          component: YanRecommend
        },
        {
          path: 'household',
          component: YanRecommend
        }
      ]
    },
    {
      path: '/topic',
      name: 'Topic',
      component: YanTopic
    }
  ]
})
