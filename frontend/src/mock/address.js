const Mock = require('mockjs');
const Random = Mock.Random;

export const address = [{
  path: '/address',
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      data: []
    };

    for (let i = 0; i < 3; i++) {
      let address = {
        receiver: Random.cname(),
        isDefault: i === 0,
        province: Random.province(),
        city: Random.city(),
        detail: Random.csentence(),
        telephone: '123456789',
      };

      result.data.push(address);
    }

    return result;
  }
}]
