import Vue from 'vue'
import Vuex from 'vuex'

import navbar from './modules/navbar.js';
import menu from './modules/menu.js';

// 搜索内容
import search from './modules/search.js';

// 商品详情
import good from './modules/good.js';

// 购物车
import cart from './modules/cart.js';

// 临时的用户信息
import tempUser from './modules/tempUser.js';

Vue.use(Vuex);

const state = {
    items: []
};

const store = new Vuex.Store({
    state,
    modules: {
        cart,
        navbar,
        menu,
        good,
        search,
        tempUser,
    }
});

export default store;