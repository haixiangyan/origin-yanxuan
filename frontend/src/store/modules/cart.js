import * as types from '../mutations_types.js'

const state = {
  // 购物车的商品数组
  cart: [],
  // 是否编辑购物车
  isEditCart: false
}

const getters = {
  cart: state => state.cart,
  isEditCart: state => state.isEditCart,
  isSelectAllCartItems: state => {
    let selectAllState = true

    state.cart.forEach((cartItem) => {
      if (cartItem.select === 0) {
        selectAllState = false;
      }
    });

    if (state.cart.length === 0) {
      selectAllState = false;
    }

    return selectAllState;
  },
  selectCartItemNum: state => {
    let num = 0;
    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        num++;
      }
    });

    return num;
  },
  isSelected: state => {
    let selectState = false;

    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        selectState = true;
      }
    });

    return selectState;
  },

  totalPrice: state => {
    let sum = 0;

    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        sum = sum + cartItem.price * cartItem.number;
      }
    });

    return sum;
  }
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
  },

  // 增加购物车的数量
  addCartItemNum(state, payload) {
    state.cart[payload.index].number++;
  },

  // 减少购物车的数量
  subCartItemNum(state, payload) {
    if (state.cart[payload.index].number !== 1) {
      state.cart[payload.index].number--;
    }
  },

  //toggle 编辑购物车
  toggleEditCart(state) {
    state.isEditCart = !state.isEditCart;

    if (state.isEditCart) {
      // 编辑的时候 select 都为0
      state.cart.forEach((cartItem) => {
        cartItem.select = 0;
      });
    } else {
      // 显示的时候 select 都为1
      state.cart.forEach((cartItem) => {
        cartItem.select = 1;
      });
    }
  },

  // 全选购物车的项目
  toggleAllCartItems(state, payload) {
    let selectAllState = state.isSelectAllCartItems ? 0 : 1;
    state.cart.forEach((cartItem) => {
      cartItem.select = payload.state;
    })
  },

  // 移除商品
  removeCartItems(state) {
    state.cart = state.cart.filter((cartItem) => {
      return cartItem.select === 0;
    });
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
