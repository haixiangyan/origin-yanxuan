import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart.js';

import user from './modules/user.js'

Vue.use(Vuex);

const state = {
    items: []
};

const store = new Vuex.Store({
    state,
    modules: {
        cart,
        user
    }
});

export default store;