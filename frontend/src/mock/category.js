const Mock = require('mockjs');
const Random = Mock.Random;

export const category = [{
  path: '/goods/category',
  type: 'get',
  data(body) {
    let menuInfo = [
      '居家',
      '餐厨',
      '配件',
      '服装',
      '洗护',
      '婴童',
      '杂货',
      '饮食',
      '志趣',
    ]

    let result = {
      result: 'success',
      data: []
    }

    // 初始化商品的分类
    for (let i = 0; i < 8; i++) {
      let category = {
        name: menuInfo[i],
        picture: `/static/img/category/category-${i+2}.png`,
        subCategory: []
      };

      // 初始化商品的子分类
      for (let j = 0; j < 11; j++) {
        let subCategory = {
          name: Random.ctitle(),
          photo: `/static/img/category/subcategory/subcategory-${Random.natural(1, 20)}.png`
        };

        category.subCategory.push(subCategory);
      }

      result.data.push(category);
    }
    return result;
  }
}]
