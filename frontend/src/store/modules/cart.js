import * as types from '../mutations_types.js'

const state = {
  // 购物车的商品数组
  cart: [],
  // 是否编辑购物车
  isEditCart: false,
  // 运费
  deliver: 10,
  // 运费的上限
  limitDeliver: 88,
  // 购物车的商品总数（头部图标）
  displayCartNum: 0,
  // 优惠
  discount: 4,
  // 选择的地址
  address: {
      receiver: '小明',
      detail: "广东省佛山市南海区怡翠世嘉",
      province: "liaoning",
      city: 'shenyang',
      telephone: '123456789',
      isDefault: true,
  },
  // 立刻购买
  tempCartItem: [],
  // 判断是否立刻购买
  isBuying: false
}

const getters = {
  cart: state => state.cart,
  isEditCart: state => state.isEditCart,
  deliver: state => state.deliver,
  discount: state => state.discount,
  limitDeliver: state => state.limitDeliver,
  address: state => state.address,
  tempCartItem: state => state.tempCartItem,
  isBuying: state => state.isBuying,
  displayCartNum: state => state.displayCartNum,
  // 是否全选
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

  // 选中购物车的商品数量
  selectCartItemNum: state => {
    let num = 0;
    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        num++;
      }
    });

    return num;
  },

  // 商品是否已经选中
  isSelected: state => {
    let selectState = false;

    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        selectState = true;
      }
    });

    return selectState;
  },

  // 购物车的总价
  totalPrice: state => {
    if (state.isBuying) {
      return state.tempCartItem[0].price;
    }

    let sum = 0;

    state.cart.forEach((cartItem) => {
      if (cartItem.select === 1) {
        sum = sum + cartItem.price * cartItem.number;
      }
    });

    return sum;
  },

  // 订单的总价
  ordeTotalPrice: state => {
    let sum = 0;

    if (state.isBuying) {
      sum = state.tempCartItem[0].price;
    }
    else {
      state.cart.forEach((cartItem) => {
        if (cartItem.select === 1) {
          sum = sum + cartItem.price * cartItem.number;
        }
      });
    }

    // 加上运费
    sum = (sum > state.limitDeliver) ? sum : sum + state.deliver;

    // 减去优惠
    sum = sum - state.discount;

    return sum;
  },
  
  // 返回购物车的商品总数
  cartNum: state => state.cart.length,

  // 返回选中的商品
  selectedCartItems: state => {
    let tempCartItems = state.cart.filter((cartItem) => {
      return cartItem.select === 1;
    });

    return tempCartItems;
  },
}

const actions = {

}

const mutations = {
  // 将商品加入购物车
  addToCart(state, payload) {
    let isExist = false;
    state.cart.forEach((cartItem) => {
      if (cartItem.ID === payload.cartItem.ID) {
        isExist = true;
        // 增加商品的数量
        cartItem.number = cartItem.number + payload.cartItem.number;
      }
    })

    // 如果不存在，则推入数组里
    if (!isExist) {
      state.cart.push(payload.cartItem);
    }
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
  },

  // 更新商品
  updateCartItems(state) {
    state.cart = state.cart.filter((cartItem) => {
      return cartItem.select === 1;
    });
  },

  // 立刻购买
  buying(state, payload) {
    state.isBuying = true;
    state.tempCartItem[0] = (payload.goodInfo);
  },

  // 重置立刻购买
  resetBuying(state) {
    state.isBuying = false;
    state.tempCartItem = []
  },

  // 增加购物车的数量
  addDisplayCartNum(state) {
    state.displayCartNum ++;
  },

  // 减少购物车的商品的数量
  subDisplayCartNum(state) {
    if (state.displayCartNum !== 1) {
      displayCartNum --;
    }
  },

  // 选择地址
  selectAddress(state, payload) {
    state.address = payload.address;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
