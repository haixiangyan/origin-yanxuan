import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart.js';
import navbar from './modules/navbar.js';

Vue.use(Vuex);

const state = {
    items: []
};

const store = new Vuex.Store({
    state,
    modules: {
        cart,
        navbar
    }
});

export default store;