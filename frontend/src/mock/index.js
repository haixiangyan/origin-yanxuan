import Mock from 'mockjs'

import { login } from './front-page.js'

let data = [].concat(
    login
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;