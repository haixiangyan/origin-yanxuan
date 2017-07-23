const state = {
    // 商品详情
    good: {
        headImage: [],
        description: [],
        shortDescription: [],
        shortDescriptionImage: []
    },
    // 第一个评论的内容
    comment: {},
    // 第一个评论的作者
    author: {},
    // 当前选择的项目
    selection: {
        type: 0,
        num: 1
    }
}

const getters = {
  good: state => state.good,
  comment: state => state.comment,
  author: state => state.author,
  selection: state => state.selection
}

const mutations = {
    // 初始化菜单的全部内容
    initGood(state, payload) {
        state.good = payload.good;
    },
    // 初始化第一个评论的内容
    initComment(state, payload) {
        state.comment = payload.comment;
        state.author = payload.author;
    },
    // 改变数量
    changeNum(state, payload) {
        state.selection.num = payload.num;
    },
    // 改变类别
    changeType(state, payload) {
        state.selection.type = payload.type;
    },
    // 添加1
    addNum(state) {
        state.selection.num ++;
    },
    // 减1
    subNum(state) {
        if (state.selection.num === 1) {
            return ;
        }
        else {
            state.selection.num --;
        }
    }
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
