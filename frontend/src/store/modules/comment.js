const state = {
    // 为某个订单添加评论
    commentOrderInfo: {}
}

const getters = {
  commentOrderInfo: state => state.commentOrderInfo,
}

const mutations = {
    // 获取订单内容
    setCommentOrderInfo(state, payload) {
        state.commentOrderInfo = payload.commentOrderInfo;
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
