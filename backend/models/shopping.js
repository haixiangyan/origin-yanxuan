var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});
db.once('open', function () {

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
		orderDate: String,
		payID: String,
		totalFee: Number
	});
	orderModel = db.model("orders", orderSchema);
	addOrder();
	var commentSchema = new mongoose.Schema({
		goodsID: Number,
		userID: String,
		content: String,
		picture: Array,
		commentDate: String,
		type: String
	});
	commentModel = db.model("comments", commentSchema);
	// addComment();
})

function addOrder() {
	var orderEntity = new orderModel({
		orderID: "15005664000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber:0,
		expressCompany: "",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1500566400000,
		orderState: 0,
		payID: "",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15004800000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 0,
		expressCompany: "",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1500480000000,
		orderState: 1,
		payID: "1500480000000",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15003936000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 810874175279,
		expressCompany: "圆通",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "123124",
			isDefault: false
		}],
		orderDate: 1500393600000,
		orderState: 2,
		payID: "1500393600000",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15001344000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 810874175279,
		expressCompany: "圆通",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1500134400000,
		orderState: 3,
		payID: "1500134400000",
		totalFee: 299
	})
	orderEntity.save();

}

function addCart() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		var obj = {
			ID: i,
			type: "1",
			number: 1,
			price: 50,
			name: "懒人清洁新选择",
			picture: '/static/img/goodsImage/0/headImage/1.jpg'
		}
		arr.push(obj);
	}
	var cartEntity = new cartModel({
		userID: 1,
		goodsList: arr
	});
	cartEntity.save();

}


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

function addComment() {
	var commentEntity = new commentModel({
		goodsID: 1,
		userID: "1",
		content: "物超所值，对于不愿弯腰干活的人拖把真的是福音啊，简单易操作。",
		picture: ["/static/img/commentImage/0/1/1.jpg"],
		commentDate: new Date().getTime(),
		type: "1套装 伸缩杆懒人拖把+懒人抹布 4卷装+40片装 地板清洁湿巾 3包装"
	})
	commentEntity.save();

}

function getCart(userID, cb) {
	cartModel.findOne({
		userID: userID
	}, function (err, docs) {
		if (docs) {
			cb("success", docs.goodsList);
		} else {
			cb("error", "");
		}

	})
}

function addToCart(obj, cb) {
	cartModel.findOne({
		userID: obj.userID
	}, function (err, docs) {
		if (docs) {
			var i;
			for (i = 0; i < docs.goodsList.length; i++) {
				if (docs.goodsList[i].ID == obj.ID && docs.goodsList[i].type == obj.type) {
					break;
				}
			}
			if (i == docs.goodsList.length) {
				goodsModel.findOne({
					ID: obj.ID
				}, function (err, docs2) {
					var newobj = {
						ID: obj.ID,
						type: obj.type,
						number: parseInt(obj.number),
						price: docs2.price,
						picture: docs2.headImage[0],
						name: docs2.topName
					}
					docs.goodsList.push(newobj);
					docs.markModified('goodsList');
					docs.save();
					cb("success", docs.goodsList);
				})

			} else {
				docs.goodsList[i].number += parseInt(obj.number);
				docs.markModified('goodsList');
				docs.save();
				cb("success", docs.goodsList);
			}
		} else {
			goodsModel.findOne({
				ID: obj.ID
			}, function (err, docs) {
				var newobj = {
					ID: obj.ID,
					type: obj.type,
					number: parseInt(obj.number),
					price: docs.price,
					picture: docs.headImage[0],
					name: docs.topName
				}
				var arr = [];
				arr.push(newobj);
				var cartEntity = new cartModel({
					userID: obj.userID,
					goodsList: arr
				});
				cartEntity.save();
				cb("success", arr);
			})

		}

	})
}

function deleteItemFromCart(userID, goodsID, cb) {
	cartModel.findOne({
		userID: userID
	}, function (err, docs) {
		if (docs) {
			var arr = docs.goodsList;
			var i = 0;
			for (i = 0; i < arr.length; i++) {
				if (arr[i].ID == goodsID) {
					break;
				}
			}
			if (i == arr.length) {
				cb("error", "");
			} else {
				arr.splice(i, 1);
				docs.save();
				cb("success", arr);
			}
		} else {
			cb("error", "");
		}

	})
}

function changeItemInCart(userID, goodsID, type, number, cb) {
	cartModel.findOne({
		userID: userID
	}, function (err, docs) {
		var arr = docs.goodsList;
		var i = 0;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].ID == goodsID && arr[i].type == type) {

				break;
			}
		}
		if (i == arr.length) {
			cb("error", "");
		} else {
			arr[i].number = parseInt(number);
			docs.save();
			cb("success", arr);
		}

	})
}

function changeCartList(userID, cartList, cb) {
	cartModel.findOne({
		userID: parseInt(userID)
	}, function (err, docs) {
		if (docs) {
			docs.goodsList = cartList;
			docs.markModified('goodsList');
			docs.save();
			cb("success", "")
		} else {
			cb("error", "")
		}

	})
}

function makeOrder(obj, cb) {
	var i;
	var flag = false;
	var arr = [];
	var arr2 = [];
	// var goodsList = JSON.parse(obj.goodsList);
	var goodsList = obj.goodsList;
	for (i = 0; i < goodsList.length; i++) {
		var newobj = goodsList[i];
		goodsModel.findOne({
			ID: newobj.ID
		}, function (err, docs) {
			if (docs) {
				var j;
				for (j = 0; j < docs.type.length; j++) {
					if (obj.type == docs.type[j]) {
						break;
					}
				}
				if (docs.inventory[j] > newobj.number) {
					docs.inventory[j] -= parseInt(newobj.number);
					docs.sale += parseInt(newobj.number);
					docs.markModified('inventory');
					docs.save();
					arr.push(i);
				} else {
					flag = true;
					arr2.push(newobj.topName);
				}
			} else {
				// cb("error", "1");//没找到商品
			}

		})
	}
	if (flag == true) { //有些商品库存不够，返回错误
		for (var k = 0; k < arr.length; k++) {
			var newobj = obj.goodsList[arr[k]];
			goodsModel.findOne({
				ID: newobj.ID
			}, function (err, docs) {
				var j;
				for (j = 0; j < docs.type.length; j++) {
					if (obj.type == docs.type[j]) {
						break;
					}
				}
				docs.inventory[j] += parseInt(newobj.number);
				docs.sale -= parseInt(newobj.number);
				docs.markModified('inventory');
				docs.save();
			})
		}
		cb("error", arr2);
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
			orderDate: new Date().getTime(),
			totalFee: parseInt(obj.totalFee)
		})
		orderEntity.save();
		cb("success", order);
	}
}

function getOrder(orderid, cb) {
	orderModel.find({
		orderID: orderid
	}, cb);
}



function getCustomerOrder(userid, cb) {
	orderModel.find({
		userID: userid
	}, function (err, docs) {
		if (docs.length > 0) {
			cb("success", docs)
		} else {
			cb("error", "")
		}
	});
}

function pay(orderid, payid, cb) {
	orderModel.findOne({
		orderID: orderid
	}, function (err, docs) {
		if (docs) {
			docs.payID = payid;
			docs.orderState = 1;
			docs.save();
			cb("success", "");
		} else {
			cb("error", "");
		}

	})
}

function deleteOrder(orderid, cb) {
	orderModel.findOne({
		orderID: orderid
	}, function (err, docs) {
		if (docs) {
			orderModel.remove({
				orderID: orderid
			}, cb);
		} else {
			cb("error", "")
		}
	})
}

function deliverGoods(orderid, expressCompany, expressNumber, cb) {
	orderModel.findOne({
		orderID: orderid
	}, function (err, docs) {
		if (docs) {
			docs.expressCompany = expressCompany;
			docs.expressNumber = expressNumber;
			docs.orderState = 2;
			docs.save();
			cb("success", "");
		} else {
			cb("error", "")
		}

	})
}

function deliverComment(obj, cb) {
	orderModel.findOne({
		orderID: obj.orderID
	}, function (err, docs) {
		if (docs) {
			docs.orderState = 4;
			docs.save();
			var commentEntity = new commentModel({
				goodsID: obj.goodsID,
				userID: obj.userID,
				content: obj.content,
				picture: obj.picture,
				commentDate: obj.commentDate,
				type: obj.type
			})
			commentEntity.save();
			cb("success", "");
		} else {
			cb("error", "");
		}

	})
}

function confirmGoods(orderid, cb) {
	orderModel.findOne({
		orderID: orderid
	}, function (err, docs) {
		if (docs) {
			docs.orderState = 3;
			docs.save();
			cb("success", "");
		} else {
			cb("error", "");
		}

	})
}


module.exports.getCart = getCart;
module.exports.addToCart = addToCart;
module.exports.deleteItemFromCart = deleteItemFromCart;
module.exports.makeOrder = makeOrder;
module.exports.changeItemInCart = changeItemInCart;
module.exports.changeCartList = changeCartList;
module.exports.getOrder = getOrder;
module.exports.pay = pay;
module.exports.deliverGoods = deliverGoods;
module.exports.confirmGoods = confirmGoods;
module.exports.deliverComment = deliverComment;
module.exports.deleteOrder = deleteOrder;
module.exports.getCustomerOrder = getCustomerOrder;