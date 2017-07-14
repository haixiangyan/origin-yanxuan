var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function() {
	console.log("error")
});
db.once('open', function() {

	console.log("shopping connected");
	var cartSchema = new mongoose.Schema({
		userID: String,
		goodsList: Array
	});

	cartModel = db.model("carts", cartSchema);
	var orderSchema = new mongoose.Schema({
		orderID: String,
		userID: String,
		goodsList: Array,
		expressNumber: Number,
		expressCompany: String,
		address: Array,
		orderState: Number,
		payID: String,
		totalFee: Number
	});
	orderModel = db.model("orders", orderSchema);
	//	addCatagory();
})

//function addCart() {
//	var arr = [];
//	for (var i = 0; i < 20; i++) {
//		var obj = {
//			ID: i,
//			type: "1",
//			number: 1
//		}
//		arr.push(obj);
//	}
//	var cartEntity = new cartModel({
//		userID: 0,
//		goodsList: arr
//	});
//	cartEntity.save();
//
//}
//function addOrder(){
//	
//}
//function CH
function getCart(userID, cb) {
	cartModel.find({
		userID: obj.userID
	}, function(err, docs) {
		cb(docs[0].goodsList);
	})
}

function addtoCart(obj, cb) {
	var newobject = {
		ID: obj.ID,
		type: obj.type,
		number: onj.number
	}
	cartModel.find({
		userID: obj.userID
	}, function(err, docs) {
		docs[0].goodsList.push(newobject)
		docs[0].save();
	})
}

function deleteItemFromCart(userID, goodsID, cb) {
	cartModel.find({
		userID: userID
	}, function(err, docs) {
		var arr = docs[0].goodsList;
		var i = 0;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].ID == goodsID) {
				break;
			}
		}
		if (i == arr.length) {
			cb("error", "");
		} else {
			arr.splice(i);
			docs.save();
			cb("success", arr);
		}

	})
}
function makeOrder(obj,cb){
	var i;
	for(i=0;i<obj.goodsList.length;i++){
	      var newobj=obj.goodsList[i];
	       goodsModel.findByID(newobj.ID,function(err,docs){
	        if (docs.length > 0) {
			var goods = docs[0];
			var j;
			for (j = 0; j < goods.type.length; j++) {
				if (obj.type == goods.type[j]) {
					break;
				}
			}
			if (goods.inventory[j] > 0) {
				goods.inventory[j]-=1;
				docs.save();
			} else {
//				cb("error", "1")//库存不足 
               break;
			}
		} else {
			cb("error", "2") //找不到该商品
		}
	       
	       })
	}
	if(i<obj.goodsList.length){
		for(var k=0;k<i;i++){
			
		}
	}
//	goodsModel.findByID(obj.goodsID, function(err, docs) {
//		if (docs.length > 0) {
//			var goods = docs[0];
//			var i;
//			for (i = 0; i < goods.type.length; i++) {
//				if (obj.type == goods.type[i]) {
//					break;
//				}
//			}
//			if (goods.inventory[i] > 0) {
//				goods.inventory[i]-=1;
//				docs.save();
//				var arr=[];
//				var newobj={
//					ID:obj.goodsID,
//					type:obj.type,
//					number:obj.number
//				}
//				arr.push(newobj);
//				var order=new Date().getTime()+obj.userID;
//				var orderEntity = new orderModel({
//					orderID:order,
//					userID: obj.userID,
//					goodsList:arr,
//					expressNumber:0,
//					expressCompany:"",
//					address: obj.address,
//					orderState: 0,
//					payID:"0",
//					totalFee:obj.totalFee
//				})
//				orderEntity.save();
//				cb("success",order);
//			} else {
//				cb("error", "1")
//			}
//		} else {
//			cb("error", "2")
//		}
}
module.exports.getCart = getCart;
module.exports.addtoCart = addtoCart;
module.exports.deleteItemFromCart = deleteItemFromCart;
//module.exports.makeOrder=makeOrder;
