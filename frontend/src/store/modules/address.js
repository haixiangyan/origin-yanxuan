const state = {
  // 搜索内容索引
  editAddress: {
    receiver: '',
    province: '',
    city: '',
    detail: '',
    telephone: '',
    isDefault: false
  },
  isEditAddress: false
}

const getters = {
  editAddress: state => state.editAddress,
  // 是否正要编辑地址
  isEditAddress: state => state.isEditAddress,
}

const mutations = {

  // 获取正在编辑的地址
  getEditAddress(state, payload) {
    state.editAddress = payload.editAddress;
  },

  // 重置编辑的状态
  resetEditState(state) {
    state.isEditAddress = false;
    state.editAddress = {
      receiver: '',
      province: '',
      city: '',
      detail: '',
      telephone: '',
      isDefault: false
    };
  },

  // 开启编辑的状态
  trickEditState(state) {
    state.isEditAddress = true;
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
