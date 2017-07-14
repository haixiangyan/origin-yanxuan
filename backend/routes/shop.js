var express = require('express');
var router = express.Router();
var shopping = require("../models/shopping");

router.get('/cart/:ID', function(req, res, next) {
	var ID = req.params.ID;
	shopping.getCart(ID, function(err, docs) {
		if (!err) {
			req.json({
				result: "success",
				data: docs
			})
		} else {
			req.json({
				result: "error"
			})
		}
	})

});
router.post('/addToCart', function(req, res, next) {
	var ID = req.body.ID;
	var Type = req.body.type;
	var number = req.body.number;
	var userID = req.body.userID;
	var obj = {
		ID: ID,
		type: Type,
		number: number,
		userID: userID
	};
	shopping.addToCart(obj, function(err, docs) {
		if (err=="success") {
			req.json({
				result: "success",
				data:docs[0]
			})
		} else {
			req.json({
				result: "error"
			})
		}

	})
});
router.delete('/cart/:userid/:id', function(req, res, next) {
	var goodsID = req.params.id;
	var userID = req.params.userid;
	shopping.deleteItemFromCart(userID, goodsID, function(err, docs) {
		if (err == "error") {
			req.json({
				result: "error"
			})
		} else {
			req.json({
				result: "success",
				cartList: docs
			})
		}
	})
})
router.post('/changeNumebr', function(req, res, next) {
	var goodsID = req.body.id;
	var userID = req.body.userid;
	var type= req.body.type;
	var number = req.body.number;
	shopping.changeItemInCart(userID, goodsID,type,number,function(err, docs) {
		if (err == "error") {
			req.json({
				result: "error"
			})
		} else {
			req.json({
				result: "success",
				cartList: docs
			})
		}
	})
})
router.post('/order', function(req, res, next) {
	var goodsList = req.body.goodList;
	var userID = req.body.userID;
	var address = req.body.address;
	var totalFee = req.body.totalFee;
	var obj = {
		goodsList: goodsList,
		userID: userID,
		address: address,
		totalFee: totalFee
	};
    shopping.makeOrder(obj,function(req,res,next){
    	if(err=="success"){
			res.json({
				result: "success",
				orderID: docs[0]
			})
		}else{
			res.json({
				result: "error",
				warning:docs[0]
			})
		}
    	
    })

})
module.exports = router;