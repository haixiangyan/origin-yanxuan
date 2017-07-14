var express = require('express');
var router = express.Router();
var shopping = require("../models/shopping");

router.get('/cart', function(req, res, next) {
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
		if (!err) {
			req.json({
				result: "success"
			})
		} else {
			req.json({
				result: "error"
			})
		}

	})
});
router.delete('/cart/:userid/:id', function(req, res, next) {
	var goodsID=req.params.id;
	var userID=req.params.userid;
	shopping.deleteItemFromCart(userID,goodsID,function(err,docs){
		if(err=="error"){
			req.json({
				result: "error"
			})
		}else{
			req.json({
				result: "success",
				cartList:docs
			})
		}
		
	})	
})


module.exports = router;