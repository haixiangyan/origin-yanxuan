import Vue from 'vue'
import Router from 'vue-router'

import Template from '@/components/Template'

// 引入专题的组件
import YanTopic from '@/components/pages/Topic/Topic'
import YanUsersLogin from '@/components/pages/Users/Login/Login'
import YanUsersRegister from '@/components/pages/Users/Register/Register'
import YanUserCenter from '@/components/pages/Users/Users'
import YanUserCenterNav from '@/components/pages/Users/UserCenter/PersonalInformation/Nav'
import YanUserCenterInfo from '@/components/pages/Users/UserCenter/PersonalInformation/Info'
import YanUserCenterInfoInterest from '@/components/pages/Users/UserCenter/PersonalInformation/Info/InterestCategory'


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
            name: 'Login',
            component: YanUsersLogin
        }, {
            path: '/register',
            name: 'Register',
            component: YanUsersRegister
        },
        {
            path: '/users/:userId',
            name: 'User Center',
            component: YanUserCenter,
        },
        {
            path: '/users/nav/:userId',
            name: 'User Center Nav',
            component: YanUserCenterNav
        },
        {
            path: '/users/info/:userId',
            name: 'User Center Info',
            component: YanUserCenterInfo
        },
        {
            path: '/users/interestCategory/:userId',
            name: 'User Center Info Interest Category',
            component: YanUserCenterInfoInterest
        },
    ]
})