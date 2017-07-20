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
        telephone: '',
        name: '',
        gender: '',
        address: [],
    },
    file: null,
    historyFile: null
}

const getters = {
    user: state => state.user,
    file: state => state.file,
    historyFile: state => state.historyFile,
    historyUser: state => state.historyUser
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
        state.historyUser.telephone = payload.historyUser.telephone;
        state.historyUser.name = payload.historyUser.name;
        state.historyUser.gender = payload.historyUser.gender;
        state.historyUser.address = payload.historyUser.address;
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
        state.historyUser.telephone = '';
    },
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