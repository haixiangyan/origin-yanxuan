const Mock = require('mockjs');
const Random = Mock.Random;

export const topic = [{
        path: '/topic-header-items',
        type: 'get',
        data(body) {
            const data = {
                result: 'success',
                items: [{
                        item_name: '丁磊私物推荐',
                        // img: 'https://localhost:8080',
                        img_url: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg'
                    },
                    {
                        item_name: '严选推荐',
                        img_url: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg'
                    },
                    {
                        item_name: '挑款师推荐',
                        img_url: 'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png'
                    },
                    {
                        item_name: '明星商品',
                        img_url: 'https://yanxuan.nosdn.127.net/14939888168151095.png'
                    }
                ]
            }
            return data;
        }
    },
    {
        path: '/topic-body-items',
        type: 'get',
        data(body) {
            const data = {
                result: 'success',
                items: [{
                        avatar_url: 'https://yanxuan.nosdn.127.net/14996971421670046.png?imageView&thumbnail=64y64',
                        author: '餐厨组：锅锅',
                        left_img_url: 'https://yanxuan.nosdn.127.net/14996971492420047.jpg',
                        hasRight: true,
                        right_img_url1: 'https://yanxuan.nosdn.127.net/14996971525560048.jpg',
                        right_img_url2: 'https://yanxuan.nosdn.127.net/14996971545560049.jpg',
                        view_num: '5.4k',
                        info_title: '告别脏累的懒人清洁新选择',
                        price: 0,
                        info_subtitle: '夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...'
                    }, {
                        avatar_url: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        author: '明星商品',
                        left_img_url: 'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                        hasRight: false,
                        right_img_url1: '',
                        right_img_url2: '',
                        view_num: '52.3k',
                        info_title: '买对床品，才能夜夜好梦',
                        price: 109,
                        info_subtitle: '床品件套满299即送太鼓抱枕'
                    },
                    {
                        avatar_url: 'https://yanxuan.nosdn.127.net/14994216007911847.png?imageView&thumbnail=64y64',
                        author: '智造组：夏大',
                        left_img_url: 'https://yanxuan.nosdn.127.net/14994248674911878.jpg',
                        hasRight: true,
                        right_img_url1: 'https://yanxuan.nosdn.127.net/14994250230111880.jpg',
                        right_img_url2: 'https://yanxuan.nosdn.127.net/14994250204371879.jpg',
                        view_num: '11.5k',
                        info_title: '不插电的小风扇，让清凉随行',
                        price: 0,
                        info_subtitle: '小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...'
                    },
                    {
                        avatar_url: 'http://yanxuan.nosdn.127.net/cf79163a1bd144d507b8cac3e711fd70.png?imageView&thumbnail=64y64',
                        author: '明星商品',
                        left_img_url: 'http://yanxuan.nosdn.127.net/8769bec52862bbfc6e5f72d6c17571dd.jpg',
                        hasRight: false,
                        right_img_url1: '',
                        right_img_url2: '',
                        view_num: '4.0k',
                        info_title: '严选，从家门口的龙井茶开始',
                        price: 85,
                        info_subtitle: '特级龙井礼盒限时直减644元'
                    }
                ]
            }
            return data;
        }
    },
    {
        path: '/topic-body-more-items',
        type: 'get',
        data(body) {
            const data = {
                result: 'success',
                items: [{
                        avatar_url: 'https://yanxuan.nosdn.127.net/14996971421670046.png?imageView&thumbnail=64y64',
                        author: '餐厨组：锅锅',
                        left_img_url: 'https://yanxuan.nosdn.127.net/14996971492420047.jpg',
                        hasRight: true,
                        right_img_url1: 'https://yanxuan.nosdn.127.net/14996971525560048.jpg',
                        right_img_url2: 'https://yanxuan.nosdn.127.net/14996971545560049.jpg',
                        view_num: '5.4k',
                        info_title: '告别脏累的懒人清洁新选择',
                        price: 0,
                        info_subtitle: '夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...'
                    }, {
                        avatar_url: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        author: '明星商品',
                        left_img_url: 'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                        hasRight: false,
                        right_img_url1: '',
                        right_img_url2: '',
                        view_num: '52.3k',
                        info_title: '买对床品，才能夜夜好梦',
                        price: 109,
                        info_subtitle: '床品件套满299即送太鼓抱枕'
                    },
                    {
                        avatar_url: 'https://yanxuan.nosdn.127.net/14994216007911847.png?imageView&thumbnail=64y64',
                        author: '智造组：夏大',
                        left_img_url: 'https://yanxuan.nosdn.127.net/14994248674911878.jpg',
                        hasRight: true,
                        right_img_url1: 'https://yanxuan.nosdn.127.net/14994250230111880.jpg',
                        right_img_url2: 'https://yanxuan.nosdn.127.net/14994250204371879.jpg',
                        view_num: '11.5k',
                        info_title: '不插电的小风扇，让清凉随行',
                        price: 0,
                        info_subtitle: '小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...'
                    },
                    {
                        avatar_url: 'http://yanxuan.nosdn.127.net/cf79163a1bd144d507b8cac3e711fd70.png?imageView&thumbnail=64y64',
                        author: '明星商品',
                        left_img_url: 'http://yanxuan.nosdn.127.net/8769bec52862bbfc6e5f72d6c17571dd.jpg',
                        hasRight: false,
                        right_img_url1: '',
                        right_img_url2: '',
                        view_num: '4.0k',
                        info_title: '严选，从家门口的龙井茶开始',
                        price: 85,
                        info_subtitle: '特级龙井礼盒限时直减644元'
                    }
                ]
            }
            return data;
        }
    }
]