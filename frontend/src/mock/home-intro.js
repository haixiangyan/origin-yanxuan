const Mock = require('mockjs');
const Random = Mock.Random;

export const home = [{
    path: '/intro-goods', // 栏截获取商品简介的路由
    type: 'get',
    data(body) {
      let data = {
        result: 'success',
        data: []
      }

      for (let i = 0; i < 2; i++) {
        let introInfo = {
          headerInfo: {
            title: Random.ctitle(),
            img: `/static/img/header/header-${i+1}.png`
          },
          goods: []
        };

        for (let j = 0; j < Random.natural(7, 9); j++) {
          let good = {
            name: Random.cname(),
            desc: Random.ctitle(),
            price: Random.natural(0, 200),
            url: '/',
            img: `/static/img/goods/good-${Random.natural(1, 16)}.png`,
            chara: Random.ctitle(),
            labels: []
          };

          for (let m = 0; m < Random.natural(0, 1); m++) {
            let label = {
              title: Random.ctitle(),
              type: Random.natural(1, 2)
            }

            good.labels.push(label);
          }

          introInfo.goods.push(good)
        }

        data.data.push(introInfo);
      }

      return data;
    },
  },
  {
    path: '/home-counter', // 栏截获取商品倒计时的路由
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: {
          url: '/',
          next: 123878273,
          img: '/static/img/counter/counter-img.png',
          currentPrice: 14.9,
          previousPrice: 59.9,
          deadline: 523878273
        }
      }

      return result;
    }
  },
  {
    path: '/home-topic-preface', // 栏截获取商品专题精选部分
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: {
          name: '严选办公室人手必备神器大公开',
          desc: '久坐伏案人士请收好',
          price: 14,
          img: '/static/img/topic-preface/preface.jpg'
        }
      }
      return result;
    }
  },
  {
    path: '/home-catalogs', // 栏截获取商品分类展示部分
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: []
      };

      for (let i = 0; i < 9; i++) {
        let catalog = {
          title: Random.ctitle(2),
          subtitle: Random.ctitle(),
          goods: []
        };

        for (let j = 0; j < 7; j++) {
          let good = {
            name: Random.cname(),
            desc: Random.ctitle(),
            chara: `${Random.natural(2, 4)}色可选`,
            price: Random.natural(20, 2000),
            img: `/static/img/catalog/catalog-good-${Random.natural(1, 14)}.png`,
            labels: []
          };

          for (let m = 0; m < Random.natural(0, 2); m++) {
            let label = {
              title: Random.ctitle(2, 4),
              type: Random.natural(1, 2)
            };
            good.labels.push(label);
          }
          catalog.goods.push(good);
        }

        result.data.push(catalog);
      }

      return result;
    }
  }
]
