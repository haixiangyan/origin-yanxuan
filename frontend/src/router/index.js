import Vue from 'vue';
import Router from 'vue-router';

import Template from '@/components/Template';

// 引入首页组件
import YanHome from '@/components/pages/Home/Home';
// 引入首页的推荐组件
import YanRecommend from '@/components/pages/Home/Recommend/Recommend';
// 引入居家的组件
import YanHousehold from '@/components/pages/Home/Household/Household';
// 引入餐厨的组件
import YanCook from '@/components/pages/Home/Cook/Cook';
// 引入配件的组件
import YanAccessories from '@/components/pages/Home/Accessories/Accessories';
// 引入衣服的组件
import YanClothes from '@/components/pages/Home/Clothes/Clothes';
// 引入洗护的组件
import YanCare from '@/components/pages/Home/Care/Care';
// 引入婴童的组件
import YanChildren from '@/components/pages/Home/Children/Children';
// 引入杂货的组件
import YanGroceries from '@/components/pages/Home/Groceries/Groceries';
// 引入饮食的组件
import YanFood from '@/components/pages/Home/Food/Food';
// 引入志趣的组件
import YanInterest from '@/components/pages/Home/Interest/Interest';

// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic';


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
          component: YanHousehold
        },
        {
          path: 'cook',
          component: YanCook
        },
        {
          path: 'accessories',
          component: YanAccessories
        },
        {
          path: 'clothes',
          component: YanClothes
        },
        {
          path: 'care',
          component: YanCare
        },
        {
          path: 'children',
          component: YanChildren
        },
        {
          path: 'groceries',
          component: YanGroceries
        },
        {
          path: 'food',
          component: YanFood
        },
        {
          path: 'interest',
          component: YanInterest
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
