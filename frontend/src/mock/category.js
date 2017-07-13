const Mock = require('mockjs');
const Random = Mock.Random;

export const category = [{
  path: '/goods/category',
  type: 'get',
  data(body) {
    let menuInfo = [
      '家装区',
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
    for (let i = 0; i < 10; i++) {
      let category = {
        name: menuInfo[i],
        picture: `/static/img/category/category-1.jpg`,
        subCategory: []
      };

      // 初始化商品的子分类
      for (let j = 0; j < 9; j++) {
        let subCategory = {
          name: Random.ctitle(),
          photo: `/static/img/category/subcategory/subcategory-1.jpg`
        };

        category.subCategory.push(subCategory);
      }

      result.data.push(category);
    }
    return result;
  }
}]
