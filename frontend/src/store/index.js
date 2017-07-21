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

// 地址
import address from './modules/address.js';

// 评论
import comment from './modules/comment.js';

// 临时的用户信息
import tempUser from './modules/tempUser.js';

// 聊天内容
import chat from './modules/chat.js';
// import user from './modules/user.js'


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
        address,      
        comment,  
        tempUser,
        chat,
        // user
    }
});

export default store;