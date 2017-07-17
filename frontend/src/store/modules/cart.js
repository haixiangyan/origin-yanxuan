import * as types from '../mutations_types.js'

const state = {
  // 购物车的商品数组
  cart: [],
}

const getters = {
  cart: state => state.cart,
}

const actions = {

}

const mutations = {
  // 将商品加入购物车
  addToCart(state, payload) {
    state.cart.push(payload.cartItem);
  },

  // 初始化购物车
  initCart(state, payload) {
    state.cart = payload.cart;
  },

  // 更改购物车的商品的选中状态
  selectCart(state, payload) {
    state.cart[payload.index].select = payload.state;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
