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
router.post('/changeCart', function(req, res, next) {
	var cartList = req.body.cartList;
	var userid=req.body.userID;
	shopping.changeCartList(userid,cartList,function(err, docs) {
		if (err == "error") {
			req.json({
				result: "error"
			})
		} else {
			req.json({
				result: "success"
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

router.get('/getOrder/:orderID',function(req,res,next){
	var orderid=req.params.orderID;
    shopping.getOrder(orderid,function(err,docs){
    	if(!err){
			res.json({
				result: "success",
				order: docs[0]
			})
		}else{
			res.json({
				result: "error"
			})
		}
    })
	
})
router.post('/pay',function(req,res,next){
	var payID=req.body.payID;
	var orderID=req.body.orderID;
	shopping.pay(orderID,payID,function(err,docs){
		if(err=="success"){
			res.json({
				result: "success"
			})
		}else{
			res.json({
				result: "error"
			})
		}
	})
	
})
router.post('/deliverGoods',function(req,res,next){
	var orderID=req.body.orderID;
	var expressCompany=req.body.expressCompany;
	var expressNumber=req.body.expressNumber;
	shopping.deliverGoods(orderID,expressCompany,expressNumber,function(err,docs){
		if(err=="success"){
			res.json({
				result: "success"
			})
		}else{
			res.json({
				result: "error"
			})
		}
	})
	
})
router.post('/confirmGoods',function(req,res,next){
	var orderid=req.body.orderID;
	shopping.confirmGoods(orderid,function(err,docs){
		if(err=="success"){
			res.json({
				result: "success"
			})
		}else{
			res.json({
				result: "error"
			})
		}
	})
})
router.patch('/makeComment',function(req,res,next){
//	var form = new multiparty.Form({
//		uploadDir: "./dist/static/commentImage"
//	})
//	form.parse(req, function(err, fields, files) {
//		var content = fields.content[0];
//		var address = fields.address[0];
//		var interest = fields.interest[0];
//		var gender = fields.gender[0];
//		var name = fields.name[0];
//		var photo = files.photo[0].originalFilename;
//		fs.rename(files.photo[0].path, "/static/userImage/" + files.photo[0].originalFilename, function(err) {
//			console.log(err)
//		})
//		var obj = {
//			telephone: telephone,
//			interest: interest,
//			gender: gender,
//			name: name,
//			photo: photo,
//			address: address
//		}
//		user.changeInformation(obj, function(err, docs) {
//			console.log(docs);
//		})
//	})
})
module.exports = router;