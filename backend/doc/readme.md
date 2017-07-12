## user

*  photo
*  telephone
*  password
*  name
*  gender
*  interest  //兴趣爱好
*  address


## goods

*  ID        //商品编号
*  price       //价格  
*  topName    //商品名
*  subName    //商品二级名字
*  shortDescription //六个简短介绍
*  shortDescriptionImage //三个简短介绍对应的图
*  headImage   //商品详情页最顶上的五张图
*  type      //商品类别,给用户选择购买
*  inventory  //库存
*  description //商品介绍图
*  information  //商品参数信息
*  sale         //已卖出件数
*  category      //商品所归属的分类
*  date       //上架时间
*  manufacturer  //制造商
*  label       //当前商品所进行的活动

## cart

*  userID
*  goodsList   //商品数组，每一项包含三个数据，商品编号,类别和数量



##order
* orderID
* userID
* goodsList //购买的商品列表，每一项包含两个数据，商品编号，,类别和数量
* expressNumber   //快递单号
* address  //收货地址
* orderState //订单状态，0表示未付款，1表示已付款，2表示已发货，3表示已确认收货，4表示已评价，5表示退货
* payID    //付款的单号
* totalFee  //用户总付款费用


##comment
* date  //评价时间
* goodsID //商品ID
* userID  //评价人ID
* userName //评价人昵称
* level   //好评 中评 差评
* content  //评价内容
* image  //评价晒单


##catagory //商品分类表
* name      //商品名
* subcatagory //子分类数组，单个子分类包含一张图和名字


##specialTopic //专题
* name   //专题名
* content  //专题介绍
* goodsList //商品列表
* upOwner   //专题制作人信息







