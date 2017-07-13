import Mock from 'mockjs'

import { login } from './front-page.js'

import { home, homeStatic } from './home-intro.js'

let data = [].concat(
    login,
    // home,
    homeStatic
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;