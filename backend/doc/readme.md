## user

*  photo
*  ID
*  telephone
*  password
*  name
*  gender
*  interest  //兴趣爱好
*  address

## goods

*  ID //商品编号
*  price       //价格  
*  TopName    //商品名
*  SubName    //商品二级名字
*  ShortDescription //三个简短介绍
*  ShortDescriptionImage //三个简短介绍对应的图
*  HeadImage   //商品详情页最顶上的五张图
*  Type      //商品类别,给用户选择购买
*  inventory  //库存
*  discription //商品介绍图
*  information  //商品参数信息
*  sale         //已卖出件数
*  Category      //商品所归属的分类
*  date    //上架时间

## cart

*  UserID
*  GoodsList   //商品数组，每一项包含两个数据，商品编号和数量

##order
* OrderID
* UserID
* GoodsList //购买的商品列表，每一项包含两个数据，商品编号和数量
* ExpressNumber   //快递单号
* address  //收货地址
* OrderState //订单状态，0表示未付款，1表示已付款，2表示已发货，3表示已确认收货，4表示已评价，5表示退货
* PayID    //付款的单号
* TotalFee  //用户总付款费用









