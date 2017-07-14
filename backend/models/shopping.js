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
	cartModel.find({
		userID: obj.userID
	}, function(err, docs) {
		var i;
		for(i=0;i<docs[0].goodsList.length;i++){
		   if(docs[0].goodsList[i].ID==obj.ID && docs[0].goodsList[i].type==obj.type){
		   	 break;
		   }
		}
		if(i==docs[0].goodsList.length){
			docs[0].goodsList.push(newobject);
			docs[0].save();
			cb("success",docs[0].goodsList);
		}else{
			docs[0].goodsList[i].number+=obj.number;
			docs[0].save();
			cb("success",docs[0].goodsList);
		}
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
function changeItemInCart(userID, goodsID,type,number,cb) {
	cartModel.find({
		userID: userID
	}, function(err, docs) {
		var arr = docs[0].goodsList;
		var i = 0;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].ID == goodsID && arr[i].type==type) {
				break;
			}
		}
		if (i == arr.length) {
			cb("error", "");
		} else {
			arr[i].number=number;
			docs.save();
			cb("success", arr);
		}

	})
}


function makeOrder(obj, cb) {
	var i;
	for (i = 0; i < obj.goodsList.length; i++) {
		var newobj = obj.goodsList[i];
		goodsModel.findByID(newobj.ID, function(err, docs) {
				var goods = docs[0];
				var j;
				for (j = 0; j < goods.type.length; j++) {
					if (obj.type == goods.type[j]) {
						break;
					}
				}
				if (goods.inventory[j] > 0) {
					goods.inventory[j] -= 1;
					docs.save();
				} else {
					break;
				}
		})
	}
	if (i < obj.goodsList.length) {//有些商品库存不够，返回错误
		for (var k = 0; k < i; k++) {
			var newobj = obj.goodsList[i];
			goodsModel.findByID(newobj.ID, function(err, docs) {
				var goods = docs[0];
				var j;
				for (j = 0; j < goods.type.length; j++) {
					if (obj.type == goods.type[j]) {
						break;
					}
				}
				goods.inventory[j] += 1;
				docs.save();
			})
		}
		cb("error", obj.goodsList[i].ID);
	} else {
		var order = new Date().getTime() + obj.userID;
		var orderEntity = new orderModel({
			orderID: order,
			userID: obj.userID,
			goodsList: obj.goodsList,
			expressNumber: 0,
			expressCompany: "",
			address: obj.address,
			orderState: 0,
			payID: "0",
			totalFee: obj.totalFee
		})
		orderEntity.save();
		cb("success", order);
	}
}
module.exports.getCart = getCart;
module.exports.addtoCart = addtoCart;
module.exports.deleteItemFromCart = deleteItemFromCart;
module.exports.makeOrder=makeOrder;
module.exports.changeItemInCart=changeItemInCart;