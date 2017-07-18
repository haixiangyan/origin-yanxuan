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

// 引入分类的组件
import YanCategory from '@/components/pages/Category/Category';

// 引入搜索组件页
import YanSearch from '@/components/pages/Search/Search';

// 引入商品详情页
import YanGoodInfo from '@/components/pages/GoodInfo/GoodInfo';
// 引入商品的选择页
import YanGoodChoose from '@/components/pages/Choose/Choose';
// 引入商品的评论列表
import YanCommentList from '@/components/pages/CommentList/CommentList';

// 引入购物车
import YanCart from '@/components/pages/Cart/Cart';

// 引入订单详情页
import YanOrder from '@/components/pages/Order/Order';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '/home', // 首页路由
      name: 'Home',
      redirect: '/home/recommend',
      component: YanHome,
      children: [{
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
      path: '/topic', // 专题路由
      name: 'Topic',
      component: YanTopic
    },
    {
      path: '/category', // 商品分类的路由
      name: 'Category',
      component: YanCategory
    },
    {
      path: '/search', // 搜索页的路由
      name: 'Search',
      component: YanSearch
    },
    {
      path: '/good-info/:goodId', // 商品详情页
      name: 'GoodInfo',
      component: YanGoodInfo
    },
    {
      path: '/choose/:goodId', // 选择商品的页
      name: 'GoodChoose',
      component: YanGoodChoose
    },
    {
      path: '/comment-list/:goodId', // 选择商品的页
      name: 'CommentList',
      component: YanCommentList
    },
    {
      path: '/cart', // 购物车的页
      name: 'Cart',
      component: YanCart
    },
    {
      path: '/order', // 订单详情页
      name: 'Order',
      component: YanOrder
    }
  ]
})
