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
    }
}

const getters = {
    user: state => state.user
}

const actions = {

}

const mutations = {
    initUser(state, payload) {
        console.log('mutations', 'initUser');
        state.user = payload.user;
    },
    editUser(state, payload) {
        stase.user.id = payload.id;
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