import * as types from '../mutations_types.js'

const state = {
  // 购物车的商品数组
  cart: [],
  cartVisible: false,
  cartEmpty: true
}

const getters = {
  cart: state => state.cart,
  isCartVisible: state => state.cartVisible,
  isCartEmpty: state => (state.cart.length == 0),
  cartLength: state => state.cart.length
}

const actions = {
  // 获取全部商品，并替换原来的数组
  getCart({commit}, payload) {
    console.log('actions', '获取购物车');
    setTimeout(()=>{
      commit(types.GET_CART, payload)
    }, 400)
  },
  // 获取选中的商品，并添加到数组中
  addToCart({commit}, payload) {
    setTimeout(()=>{
      commit(types.ADD_TO_CART, payload)
    }, 400)
  },
  // 编辑购物车，跟据商品的数量修改购物车数组
  editCart({commit}, payload) {
    setTimeout(()=> {
      commit(types.EDIT_CART, payload)
    })
  },
  // 移除购物车中的商品，跟据商品编号移除商品
  removeFromCart({commit}, payload) {
    setTimeout(()=> {
      commit(types.REMOVE_FROM_CART, payload)
    })
  },
  // 显示购物车
  showCart({commit}) {
    setTimeout(()=>{
      commit(types.SHOW_CART)
    })
  },
  // 关闭系购物车
  hideCart({commit}) {
    setTimeout(()=>{
      commit(types.HIDE_CART)
    })
  }
}

const mutations = {
  // 获取购物车的商品
  [types.GET_CART] (state, payload) {
    console.log('mutations', '获取购物车');
    // 向购物车中添加商品
    state.cart = payload.cart
  },
  // 添加商品到购物车
  [types.ADD_TO_CART] (state, payload) {
    // 向购物车中添加商品
    state.cart.push(payload.productItem);
  },
  [types.EDIT_CART] (state, payload) {
    // 修改商品的数量
    state.cart[payload.cartItemId-1].num = payload.num
  },
  [types.REMOVE_FROM_CART] (state, payload) {
    // 跟据购物车中商品的id来移除商品
    state.cart.splice(payload.cartItemId-1, 1)
  },
  // 显示购物车
  [types.SHOW_CART] (state) {
    state.cartVisible = true
  },
  // 关闭购物车
  [types.HIDE_CART] (state) {
    state.cartVisible = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
