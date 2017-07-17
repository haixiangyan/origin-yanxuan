const Mock = require('mockjs');
const Random = Mock.Random;

export const cart = [{
  path: '/shop/cart/1',
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      data: []
    };

    for (let i = 0; i < 3; i++) {
      let cartItem = {
        "ID": (i+1),
        "name": Random.ctitle(7, 9),
        "type": Random.ctitle(4, 6),
        "number": Random.natural(2, 3),
        "price": Random.natural(20, 2000),
        "picture": `/static/img/cart/cartItem.png`
      }

      result.data.push(cartItem);
    }

    return result;
  }
}]
