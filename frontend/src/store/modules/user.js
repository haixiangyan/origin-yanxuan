import * as types from '../mutations_types.js'

const state = {
    user: {
        _id: '',
        telephone: '',
        password: '',
        photo: '',
        name: '',
        gender: '',
        __v: '',
        address: [],
        interest: []
    },
    historyUser: {
        _id: '',
        telephone: '',
        password: '',
        photo: '',
        name: '',
        gender: '',
        __v: '',
        address: [],
        interest: []
    },
    file: null,
    historyFile: null,
    loginState: {
        telephone: '',
        isLogin: false
    }
}

const getters = {
    user: state => state.user,
    file: state => state.file,
    historyFile: state => state.historyFile,
    historyUser: state => state.historyUser,
    loginState: state => state.loginState
}

const actions = {

}

const mutations = {
    initUser(state, payload) {
        console.log('mutations', 'initUser');
        state.user = payload.user;
    },
    initHistoryUser(state, payload) {
        console.log('mutations', 'initUser');
        state.historyUser = JSON.parse(JSON.stringify(payload.historyUser));
    },
    editUser(state, payload) {
        state.user.id = payload.id;
    },
    editFile(state, payload) {
        state.file = payload.file;
    },
    editHistoryFile(state, payload) {
        state.historyFile = payload.historyFile;
    },
    cleanHistoryUser(state, payload) {
        console.log('cleanHistoryUser');
        state.historyUser.telephone = '';
    },
    setLoginState(state, payload) {
        console.log('setLoginState', payload);
        state.loginState.telephone = payload.loginState.telephone;
        state.loginState.isLogin = payload.loginState.isLogin;
    }
}

/*
//.vue中使用
{{user.name}}
computed: {
    user() {
        return this.$store.getters.user;
    }
}

this.$store.commit('initUser'. {
    user:{
        name: 'jj'
    }
})
*/

export default {
    state,
    getters,
    actions,
    mutations
}