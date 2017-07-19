var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});
db.once('open', function () {

	console.log("goods connected");
	var goodsSchema = new mongoose.Schema({
		ID: Number,
		price: Number,
		chara: String,
		topName: String,
		subName: String,
		shortDescription: Array,
		shortDescriptionImage: Array,
		headImage: Array,
		type: Array,
		inventory: Array,
		description: Array,
		information: Array,
		sale: Number,
		category: String,
		subCategory: String,
		date: String,
		manufacturer: String,
		label: Array
	});
	goodsSchema.methods.findByID = function (cb) {
		return this.model("goods").find({
			ID: this.ID
		}, cb)
	}
	goodsSchema.statics.findByID = function (ID, cb) {
		return this.find({
			ID: ID
		}, cb)
	}
	goodsModel = db.model("goods", goodsSchema);
	// addGoods()
	var categorySchema = new mongoose.Schema({
		name: String,
		picture: String,
		subCategory: Array
	});
	categoryModel = db.model("categories", categorySchema);
	addCategory();
	var topicModelSchema = new mongoose.Schema({
		topicID: Number,
		writer: String,
		writerImage: String,
		picture: Array,
		headline: String,
		content: String,
		watchNumber: String,
		price: Number
	});
	topicModel = db.model("topics", topicModelSchema);
	addTopic();
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

	var commentSchema = new mongoose.Schema({
		goodsID: Number,
		userID: String,
		content: String,
		picture: Array,
		commentDate: String
	});
	commentModel = db.model("comments", commentSchema);
	var userschema = new mongoose.Schema({
		telephone: String,
		name: String,
		password: String,
		photo: String,
		gender: String,
		interest: Array,
		address: Array
	});
	userModel = db.model("User", userschema);
})

function addGoods() {
	var i = 1;
	//	for(var i = 0; i < 100; i++) {
	var goodsEntity = new goodsModel({
		ID: i,
		price: 10 * i + 5,
		chara: "二种可选",
		topName: "懒人清洁新选择",
		subName: "高效清洁组合",
		shortDescription: ['静电吸附', '轻盈省力', '转头流畅', '智慧灵活', '双面可用', '坚韧厚实'],
		shortDescriptionImage: ['/static/img/goodsImage/0/shortdescriptionImage/1.png', '/static/img/goodsImage/0/shortdescriptionImage/2.jpg', '/static/img/goodsImage/0/shortdescriptionImage/3.jpg'],
		headImage: ['/static/img/goodsImage/0/headImage/1.jpg', '/static/img/goodsImage/0/headImage/2.jpg', '/static/img/goodsImage/0/headImage/3.jpg', '/static/img/goodsImage/0/headImage/4.jpg', '/static/img/goodsImage/0/headImage/5.jpg'],
		type: ['1套装 伸缩杆懒人拖把+懒人抹布 4卷装+40片装 地板清洁湿巾 3包装'],
		inventory: [999, 999, 999, 999, 999, 999],
		description: ['/static/img/goodsImage/0/description/1.jpg', '/static/img/goodsImage/0/description/2.jpg', '/static/img/goodsImage/0/description/3.jpg', '/static/img/goodsImage/0/description/4.jpg', '/static/img/goodsImage/0/description/5.jpg', '/static/img/goodsImage/0/description/6.jpg', '/static/img/goodsImage/0/description/7.jpg', '/static/img/goodsImage/0/description/8.jpg'],
		information: [{
			"attrName": "组合",
			"attrValue": `1套装 伸缩杆懒人拖把  4卷装 懒人抹布 3包装 地板清洁湿巾（40片装）`
		}],
		sale: parseInt(Math.random() * 100),
		category: parseInt(i / 8),
		subCategory: i + 100,
		date: new Date().getTime(),
		manufacturer: "ck",
		label: [{
			title: "爆品",
			type: "1"
		}, {
			title: "新品",
			type: "2"
		}]
	})
	goodsEntity.save();
	//	}
}

function addTopic() {
	for (var i = 0; i < 10; i++) {
		var topicEntity = new topicModel({
			topicID: i,
			writer: "餐厨组：锅锅",
			writerImage: "/static/img/topicImage/writerImage/1.jpg",
			picture: ["/static/img/topicImage/headImage/1.jpg", "/static/img/topicImage/headImage/2.jpg", "/static/img/topicImage/headImage/3.jpg"],
			headline: "用这套刀，发现德式厨房奥秘",
			content: "如果你参观过德国人的厨房，一定会被满屋子的bling bling震撼到：不仅台面...",
			watchNumber: "14.6k",
			price: parseInt(Math.random() * 100)
		})
		topicEntity.save();
	}
}

function addCategory() {
	//	for (var i = 0; i < 10; i++) {
	//		var categoryEntity = new categoryModel({
	//			name: i,
	//			picture: "a.jpg",
	//			subCategory: [{
	//				name: i + 100,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 101,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 102,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 103,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 104,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 105,
	//				photo: "a.jpg"
	//			}, {
	//				name: i + 106,
	//				photo: "a.jpg"
	//			}]
	//		})
	//		categoryEntity.save();
	var categoryEntity = new categoryModel({
		name: '餐厨',
		picture: "/static/img/category/餐厨/餐厨.png",
		subCategory: [{
			name: '杯壶',
			photo: "/static/img/category/餐厨/杯壶.png"
		}, {
			name: '餐具',
			photo: "/static/img/category/餐厨/餐具.png"
		}, {
			name: '茶具咖啡具',
			photo: "/static/img/category/餐厨/茶具咖啡具.png"
		}, {
			name: '厨房小电',
			photo: "/static/img/category/餐厨/厨房小电.png"
		}, {
			name: '刀剪砧板',
			photo: "/static/img/category/餐厨/刀剪砧板.png"
		}, {
			name: '功能厨具',
			photo: "/static/img/category/餐厨/功能厨具.png"
		}, {
			name: '锅具',
			photo: "/static/img/category/餐厨/锅具.png"
		}, {
			name: '清洁保鲜',
			photo: "/static/img/category/餐厨/清洁保鲜.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '服装',
		picture: "/static/img/category/服装/服装.png",
		subCategory: [{
			name: 'T恤',
			photo: "/static/img/category/服装/T恤.png"
		}, {
			name: '衬衫',
			photo: "/static/img/category/服装/衬衫.png"
		}, {
			name: '家居服',
			photo: "/static/img/category/服装/家居服.png"
		}, {
			name: '裤装',
			photo: "/static/img/category/服装/裤装.png"
		}, {
			name: '毛衣',
			photo: "/static/img/category/服装/毛衣.png"
		}, {
			name: '内裤',
			photo: "/static/img/category/服装/内裤.png"
		}, {
			name: '内衣',
			photo: "/static/img/category/服装/内衣.png"
		}, {
			name: '丝袜',
			photo: "/static/img/category/服装/丝袜.png"
		}, {
			name: '袜子',
			photo: "/static/img/category/服装/袜子.png"
		}, {
			name: '卫衣',
			photo: "/static/img/category/服装/卫衣.png"
		}, {
			name: '婴童服饰',
			photo: "/static/img/category/服装/婴童服饰.png"
		}]
	})
	categoryEntity.save();

	categoryEntity = new categoryModel({
		name: '居家',
		picture: "/static/img/category/居家/居家.png",
		subCategory: [{
			name: '被枕',
			photo: "/static/img/category/居家/被枕.png"
		}, {
			name: '布艺软装',
			photo: "/static/img/category/居家/布艺软装.png"
		}, {
			name: '宠物',
			photo: "/static/img/category/居家/宠物.png"
		}, {
			name: '床品件套',
			photo: "/static/img/category/居家/床品件套.png"
		}, {
			name: '灯具',
			photo: "/static/img/category/居家/灯具.png"
		}, {
			name: '家具',
			photo: "/static/img/category/居家/家具.png"
		}, {
			name: '家饰',
			photo: "/static/img/category/居家/家饰.png"
		}, {
			name: '生活电器',
			photo: "/static/img/category/居家/生活电器.png"
		}, {
			name: '夏凉',
			photo: "/static/img/category/居家/夏凉.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '配件',
		picture: "/static/img/category/配件/配件.png",
		subCategory: [{
			name: '单肩包',
			photo: "/static/img/category/配件/单肩包.png"
		}, {
			name: '功能箱包',
			photo: "/static/img/category/配件/功能箱包.png"
		}, {
			name: '行李箱',
			photo: "/static/img/category/配件/行李箱.png"
		}, {
			name: '男鞋',
			photo: "/static/img/category/配件/男鞋.png"
		}, {
			name: '女鞋',
			photo: "/static/img/category/配件/女鞋.png"
		}, {
			name: '配饰',
			photo: "/static/img/category/配件/配饰.png"
		}, {
			name: '数码',
			photo: "/static/img/category/配件/数码.png"
		}, {
			name: '双肩包',
			photo: "/static/img/category/配件/双肩包.png"
		}, {
			name: '拖鞋',
			photo: "/static/img/category/配件/拖鞋.png"
		}, {
			name: '围巾件套',
			photo: "/static/img/category/配件/围巾件套.png"
		}]
	})
	categoryEntity.save();

	categoryEntity = new categoryModel({
		name: '洗护',
		picture: "/static/img/category/洗护/洗护.png",
		subCategory: [{
			name: '家庭清洁',
			photo: "/static/img/category/洗护/家庭清洁.png"
		}, {
			name: '口腔护理',
			photo: "/static/img/category/洗护/口腔护理.png"
		}, {
			name: '毛巾',
			photo: "/static/img/category/洗护/毛巾.png"
		}, {
			name: '美妆',
			photo: "/static/img/category/洗护/美妆.png"
		}, {
			name: '面部护理',
			photo: "/static/img/category/洗护/面部护理.png"
		}, {
			name: '身体护理',
			photo: "/static/img/category/洗护/身体护理.png"
		}, {
			name: '香薰',
			photo: "/static/img/category/洗护/香薰.png"
		}, {
			name: '浴室用具',
			photo: "/static/img/category/洗护/浴室用具.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '饮食',
		picture: "/static/img/category/饮食/饮食.png",
		subCategory: [{
			name: '炒货',
			photo: "/static/img/category/饮食/炒货.png"
		}, {
			name: '冲饮',
			photo: "/static/img/category/饮食/冲饮.png"
		}, {
			name: '糕点',
			photo: "/static/img/category/饮食/糕点.png"
		}, {
			name: '果干',
			photo: "/static/img/category/饮食/果干.png"
		}, {
			name: '茗茶',
			photo: "/static/img/category/饮食/茗茶.png"
		}, {
			name: '肉制品',
			photo: "/static/img/category/饮食/肉制品.png"
		}, {
			name: '食材',
			photo: "/static/img/category/饮食/食材.png"
		}, {
			name: '调味',
			photo: "/static/img/category/饮食/调味.png"
		}, {
			name: '小食',
			photo: "/static/img/category/饮食/小食.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '婴童',
		picture: "/static/img/category/婴童/婴童.png",
		subCategory: [{
			name: '儿童服饰',
			photo: "/static/img/category/婴童/儿童服饰.png"
		}, {
			name: '妈咪',
			photo: "/static/img/category/婴童/妈咪.png"
		}, {
			name: '配搭',
			photo: "/static/img/category/婴童/配搭.png"
		}, {
			name: '童车童椅',
			photo: "/static/img/category/婴童/童车童椅.png"
		}, {
			name: '玩具',
			photo: "/static/img/category/婴童/玩具.png"
		}, {
			name: '喂养',
			photo: "/static/img/category/婴童/喂养.png"
		}, {
			name: '婴童洗护',
			photo: "/static/img/category/婴童/婴童洗护.png"
		}, {
			name: '婴幼儿服饰',
			photo: "/static/img/category/婴童/婴幼儿服饰.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '杂货',
		picture: "/static/img/category/杂货/杂货.png",
		subCategory: [{
			name: '出行用品',
			photo: "/static/img/category/杂货/出行用品.png"
		}, {
			name: '海外',
			photo: "/static/img/category/杂货/海外.png"
		}, {
			name: '户外',
			photo: "/static/img/category/杂货/户外.png"
		}, {
			name: '收纳',
			photo: "/static/img/category/杂货/收纳.png"
		}, {
			name: '文具',
			photo: "/static/img/category/杂货/文具.png"
		}, {
			name: '眼镜',
			photo: "/static/img/category/杂货/眼镜.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '志趣',
		picture: "/static/img/category/志趣/志趣.jpg",
		subCategory: [{
			name: '暗黑破坏神',
			photo: "/static/img/category/志趣/暗黑破坏神.png"
		}, {
			name: '唱片',
			photo: "/static/img/category/志趣/唱片.png"
		}, {
			name: '大话西游',
			photo: "/static/img/category/志趣/大话西游.png"
		}, {
			name: '风暴英雄',
			photo: "/static/img/category/志趣/风暴英雄.png"
		}, {
			name: '黑凤梨',
			photo: "/static/img/category/志趣/黑凤梨.png"
		}, {
			name: '礼品卡',
			photo: "/static/img/category/志趣/礼品卡.png"
		}, {
			name: '炉石传说',
			photo: "/static/img/category/志趣/炉石传说.png"
		}, {
			name: '梦幻西游',
			photo: "/static/img/category/志趣/梦幻西游.png"
		}, {
			name: '魔兽世界',
			photo: "/static/img/category/志趣/魔兽世界.png"
		}, {
			name: '守望先锋',
			photo: "/static/img/category/志趣/守望先锋.png"
		}, {
			name: '我的世界',
			photo: "/static/img/category/志趣/我的世界.png"
		}, {
			name: '夏日甜心',
			photo: "/static/img/category/志趣/夏日甜心.png"
		}, {
			name: '星际争霸',
			photo: "/static/img/category/志趣/星际争霸.png"
		}, {
			name: '阴阳师',
			photo: "/static/img/category/志趣/阴阳师.png"
		}]
	})

	categoryEntity.save();
}

function getGoods(ID, cb) {
	goodsModel.findOne({
		ID: ID
	}, function (err, docs) {
		if (docs) {
			var obj = docs;
			var arr = [];
			arr.push(obj)
			commentModel.find({
				goodsID: obj.ID
			}, function (err, docs2) {
				var newobj = docs2[0];
				arr.push(newobj);
				userModel.find({
					telephone: newobj.userID
				}, function (err, docs3) {
					var newobj2 = {
						customerPicture: docs3[0].photo,
						customerName: docs3[0].name
					}
					arr.push(newobj2)
					cb("success", arr);
				})
			})
		} else {
			cb("error", "");
		}


	});

}

function getGoodsBySale(cb) {
	var query = goodsModel.find({});
	query.sort({
		sale: "desc"
	});
	query.limit(9);
	query.exec(cb);
}

function getGoodsByDate(cb) {
	var query = goodsModel.find({});
	query.sort({
		date: "desc"
	});
	query.limit(9);
	query.exec(cb);
}

function getGoodsByAllType(cb) {
	let arr = [];
	categoryModel.find({}, function (err, docs) {
		for (let i = 0; i < docs.length; i++) {
			let obj = {
				name: "",
				data: []
			};
			let categoryName = docs[i].name;
			obj.name = categoryName;
			let queryGoods = goodsModel.find({
				category: categoryName
			});
			queryGoods.limit(7);
			goodsModel.find(queryGoods, function (err, docs2) {
				let goodsArr = []
				let goods;
				for (let j = 0; j < docs2.length; j++) {
					let goods = {
						ID: docs2[j].ID,
						topName: docs2[j].topName,
						subName: docs2[j].subName,
						price: docs2[j].price,
						label: docs2[j].label,
						chara: docs2[j].chara,
						headImage: docs2[j].headImage[0],

					};
					goodsArr.push(goods);
				}
				obj.data = goodsArr;
				arr.push(obj);
				if (arr.length == docs.length - 1) {
					cb("success", arr)
				}
			})
		}

	})
}

function getCategory(cb) {
	categoryModel.find({}, cb)
}

function getCertainCategory(category, cb) {
	let arr = [];
	categoryModel.find({
		name: category
	}, function (err, docs) {
		let subCategoryArr = docs[0].subCategory;
		for (let i = 0; i < subCategoryArr.length; i++) {
			let obj = {
				name: "",
				data: []
			};
			let categoryName = subCategoryArr[i].name;
			obj.name = categoryName;
			let queryGoods = goodsModel.find({
				subCategory: categoryName,
			});
			queryGoods.limit(7);
			let goodsArr = [];
			goodsModel.find(queryGoods, function (err, docs2) {
				let goodsArr = []
				let goods;
				for (let j = 0; j < docs2.length; j++) {
					let goods = {
						ID: docs2[j].ID,
						topName: docs2[j].topName,
						subName: docs2[j].subName,
						price: docs2[j].price,
						label: docs2[j].label,
						chara: docs2[j].chara,
						headImage: docs2[j].headImage[0]
					};
					goodsArr.push(goods);
				}
				obj.data = goodsArr;
				arr.push(obj);
				if (arr.length == subCategoryArr.length - 1) {
					cb("success", arr)
				}
			})
		}

	})
}

function getCertainSubCategoryGoods(category, cb) {
	var arr = [];
	goodsModel.find({
		subCategory: category
	}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			let goods = {
				ID: docs[i].ID,
				topName: docs[i].topName,
				subName: docs[i].subName,
				price: docs[i].price,
				label: docs[i].label,
				chara: docs[i].chara,
				headImage: docs[i].headImage[0]
			};
			arr.push(goods);
		}
		cb(err, arr);
	})
}

function search(key, cb) {
	var arr = [];
	goodsModel.find({}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var obj = docs[i];
			if (obj.topName.indexOf(key) != -1 || obj.subName.indexOf(key) != -1 || obj.category.indexOf(key) != -1 || obj.subCategory.indexOf(key) != -1) {
				var newobj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName: docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0]
				}
				arr.push(newobj);
			}
			if (arr.length > 10) {
				break;
			}
		}
		if (arr.length > 0) {
			cb("success", arr)
		} else {
			cb("error", "")
		}
	})
}

function showTopic(cb) {
	topicModel.find({}, cb);
}

function makeOrder(obj, cb) {
	goodsModel.findOne({
		ID: obj.goodsID
	}, function (err, docs) {
		if (docs) {
			var inventory = [];
			inventory = docs.inventory;
			for (i = 0; i < docs.type.length; i++) {
				if (obj.type == docs.type[i]) {
					break;
				}
			}
			if (docs.inventory[i] > obj.number) {
				inventory[i] -= obj.number;
				docs.inventory = inventory;
				docs.markModified('inventory');
				docs.save();

				var arr = [];
				var newobj = {
					ID: obj.goodsID,
					type: obj.type,
					number: obj.number
				}
				arr.push(newobj);
				var order = new Date().getTime() + obj.userID;
				var orderEntity = new orderModel({
					orderID: order,
					userID: obj.userID,
					goodsList: arr,
					expressNumber: 0,
					expressCompany: "",
					address: obj.address,
					orderState: 0,
					payID: "0",
					totalFee: obj.totalFee
				})
				orderEntity.save();
				cb("success", order);
			} else {
				cb("error", "1") //库存不足
			}
		} else {
			cb("error", "2") //找不到该商品
		}
	})
}

function getComment(goodsID, cb) {
	var arr = [];
	var arr2 = [];
	commentModel.find({
		goodsID: goodsID
	}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var newobj = docs[i];
			arr.push(newobj)
			userModel.find({
				telephone: newobj.userID
			}, function (err, docs3) {
				var newobj2 = {
					customerPicture: docs3[0].photo,
					customerName: docs3[0].name
				}
				//				var newobj3={comment:newobj,customer:newobj2};
				arr2.push(newobj2);
				if (arr.length == docs.length && arr2.length == docs.length) {
					var obj = {
						comment: arr,
						user: arr2
					}
					cb("success", obj)
				}
			});
		}
	})
}
module.exports.getCategory = getCategory;
module.exports.getGoods = getGoods;
module.exports.getGoodsBySale = getGoodsBySale;
module.exports.getGoodsByDate = getGoodsByDate;
module.exports.getGoodsByAllType = getGoodsByAllType;
module.exports.getCertainCategory = getCertainCategory;
module.exports.getCertainSubCategoryGoods = getCertainSubCategoryGoods;
module.exports.search = search;
module.exports.showTopic = showTopic;
module.exports.makeOrder = makeOrder;
module.exports.getComment = getComment;