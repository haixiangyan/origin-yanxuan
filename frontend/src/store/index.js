import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart.js'

Vue.use(Vuex);

const state = {
    items: []
};

const store = new Vuex.Store({
    state,
    modules: {
        cart
    }
});

export default store;