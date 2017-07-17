import * as types from '../mutations_types.js'

const state = {
    user: {
        telephone: 0,
        password: '',
        address: [],
        interest: [],
        photo: '',
        gender: ''
    }
}

const getters = {
    user: state => state.user
}

const actions = {

}

const mutations = {
    initUser(state, payload) {
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