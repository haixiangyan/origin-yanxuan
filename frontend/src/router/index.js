import Vue from 'vue'
import Router from 'vue-router'

import Template from '@/components/Template'

// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic'
import YanUsers from '@/components/pages/Users/Login/Login'
import YanUsersRegister from '@/components/pages/Users/Register/Register'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Template
        },
        {
            path: '/topic',
            name: 'Topic',
            component: YanTopic
        },
        {
            path: '/login',
            name: 'Users',
            component: YanUsers
        }, {
            path: '/register',
            name: 'Register',
            component: YanUsersRegister
        }
    ]
})