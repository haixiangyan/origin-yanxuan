import Mock from 'mockjs';

import { login } from './front-page.js';

// 主页面
import { home, homeStatic } from './home-intro.js';
import { homeGood } from './home-goods.js';

// 分类页面
import { category } from './category.js';

let data = [].concat(
    login,
    // home,
    homeStatic,
    // homeGood
    // category
    // search,
    good
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;