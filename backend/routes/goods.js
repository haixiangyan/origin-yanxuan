var express = require('express');
var router = express.Router();
var goods = require("../models/goods");

router.post('/', function(req, res, next) {
	res.send('respond with a resource');
})
router.get('/goods', function(req, res, next) {
	var ID = req.params.ID;
	goods.getGoods(ID, function(err, docs) {
		if (docs.length > 0) {
			res.json({
				result: "success",
				data: docs[0]
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})
router.get('/topSale', function(req, res, next) {
	console.log("getTopSale")
	goods.getGoodsBySale(function(err, docs) {
		if (!err) {
			var arr = [];
			var obj;
			for (var i = 0; i < docs.length; i++) {
				obj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName : docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0]
				};
				arr.push(obj);
			}
			res.json({
				result: "success",
				data: arr
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})
router.get('/recentSale', function(req, res, next) {
	goods.getGoodsByDate(function(err, docs) {
		if (!err) {
			var arr = [];
			var obj;
			for (var i = 0; i < docs.length; i++) {
				obj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName : docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0]
				};
				arr.push(obj);
			}
			res.json({
				result: "success",
				data: docs
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
});
router.get('/displayGoods', function(req, res, next) {
	goods.getGoodsByAllType(function(err,docs){
		if(err=="success"){
		res.json({
				result: "success",
				data: docs
			})
		
		}else{
			res.json({
				result: "error"
			})
		}
	})
})
router.get('/category',function(req,res,next){
	goods.getCategory(function(err,docs){
		if(!err){
			res.json({
				result: "success",
				data: docs
			})
		}else{
			res.json({
				result: "error"
			})
		}
		
	})
})
module.exports = router;