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

	cartModel = db.model("Cart", cartSchema);
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
	orderModel = db.model("Order", orderSchema);
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
	cartModel.findRule({
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
module.exports.getCart = getCart;
module.exports.addtoCart = addtoCart;
module.exports.deleteItemFromCart = deleteItemFromCart;