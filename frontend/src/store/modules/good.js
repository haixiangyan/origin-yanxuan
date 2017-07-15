const state = {
    // 商品详情
    good: {
        shortDescription: [],
        shortDescriptionImage: []
    }
}

const getters = {
  good: state => state.good,
}

const mutations = {
    // 初始化菜单的全部内容
    initGood(state, payload) {
        state.good = payload.good;
        console.log(state.good)
    },
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
