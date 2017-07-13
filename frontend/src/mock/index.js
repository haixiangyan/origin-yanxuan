import Mock from 'mockjs'

import { login } from './front-page.js'
import { topic } from './topic.js'
let data = [].concat(
    login, topic
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;