var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function() {
	console.log("error")
});
db.once('open', function() {

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
		inventory: Number,
		description: Array,
		information: Array,
		sale: Number,
		category: String,
		subCategory: String,
		date: String,
		manufacturer: String,
		label: Array
	});
	goodsSchema.methods.findByID = function(cb) {
		return this.model("Goods").find({
			ID: this.ID
		}, cb)
	}
	goodsSchema.statics.findByID = function(ID, cb) {
		return this.find({
			ID: ID
		}, cb)
	}
	goodsModel = db.model("Goods", goodsSchema);
	addGoods()
	var categorySchema = new mongoose.Schema({
		name: String,
		picture: String,
		subCategory: Array
	});
	categoryModel = db.model("Category", categorySchema);
	addCategory();
})

function addGoods() {
	for (var i = 0; i < 100; i++) {
		var goodsEntity = new goodsModel({
			ID: i,
			price: 10 * i + 5,
			chara: "二种可选",
			topName: "懒人清洁新选择",
			subName: "高效清洁组合",
			shortDescription: ['a', 'a', 'a', 'a', 'a', 'a'],
			shortDescriptionImage: ['a', 'a', 'a', 'a', 'a', 'a'],
			headImage: ['/static/img/goodsImage/1.png', 'a', 'a', 'a', 'a'],
			type: ['a', 'a', 'a', 'a', 'a', 'a'],
			inventory: 999,
			description: ['a', 'a', 'a', 'a', 'a', 'a'],
			information: ['a', 'a', 'a', 'a', 'a', 'a'],
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
	}
}

function addCategory() {
	for (var i = 0; i < 10; i++) {
		var categoryEntity = new categoryModel({
			name: i,
			picture: "a.jpg",
			subCategory: [{
				name: i + 100,
				photo: "a.jpg"
			}, {
				name: i + 101,
				photo: "a.jpg"
			}, {
				name: i + 102,
				photo: "a.jpg"
			}, {
				name: i + 103,
				photo: "a.jpg"
			}, {
				name: i + 104,
				photo: "a.jpg"
			}, {
				name: i + 105,
				photo: "a.jpg"
			}, {
				name: i + 106,
				photo: "a.jpg"
			}]
		})
		categoryEntity.save();
	}

}

function getGoods(ID, cb) {
	goodsModel.findByID(ID, cb);
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
	catrgoryModel.find({}, function(err, docs) {
		for (let i = 0; i < docs.length; i++) {
			let obj = {
				name: "",
				data: []
			};
			let catrgoryName = docs[i].name;
			obj.name = catrgoryName;
			let queryGoods = goodsModel.find({
				category: categoryName
			});
			queryGoods.limit(7);
			goodsModel.find(queryGoods, function(err, docs2) {
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
	}, function(err, docs) {
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
			goodsModel.find(queryGoods, function(err, docs2) {
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
	}, function(err, docs) {
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
	goodsModel.find({}, function(err, docs) {
		console.log(docs.length);
		for (var i = 0; i < docs.length; i++) {
			var obj = docs[i];
			if (obj.topName.indexOf(key)!= -1 || obj.subName.indexOf(key) != -1 || obj.category.indexOf(key) != -1 || obj.subCategory.indexOf(key) != -1) {
				arr.push(obj);
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
module.exports.getCategory = getCategory;
module.exports.getGoods = getGoods;
module.exports.getGoodsBySale = getGoodsBySale;
module.exports.getGoodsByDate = getGoodsByDate;
module.exports.getGoodsByAllType = getGoodsByAllType;
module.exports.getCertainCategory = getCertainCategory;
module.exports.getCertainSubCategoryGoods = getCertainSubCategoryGoods;
module.exports.search = search;