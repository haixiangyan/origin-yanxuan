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
		chara:String,
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
})

function addGoods() {
	for(var i=0;i<20;i++){
		var goodsEntity = new goodsModel({
		ID: i,
		price: 10*i+5,
		chara:"A",
		topName:"a",
		subName:"b",
		shortDescription: ['a','a','a','a','a','a'],
		shortDescriptionImage:['a','a','a','a','a','a'],
		headImage: ['a','a','a','a','a'],
		type:['a','a','a','a','a','a'],
		inventory:999,
		description: ['a','a','a','a','a','a'],
		information:['a','a','a','a','a','a'],
		sale:parseInt(Math.random()*40),
		category:'居家',
		date:new Date().getTime(),
		manufacturer:"ck",
		label:[{title:"a",type:"1"},{title:"a",type:"2"}]
	})
	goodsEntity.save();
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

module.exports.getGoods = getGoods;
module.exports.getGoodsBySale = getGoodsBySale;
module.exports.getGoodsByDate = getGoodsByDate;