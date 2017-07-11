var express = require('express');
var router = express.Router();
var user = require("../models/user");
var multiparty = require("multiparty")
var fs = require("fs");
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});
router.post('/register', function(req, res, next) {
	var tel = req.body.telephone;
	var password = req.body.password;
	var obj = {
		telephone: tel,
		password: password
	}
	user.creatUser(obj, function(err, docs) {
		if (docs.length > 0) {
			res.json({
					result: "success",
				})
		} else {
			res.json({
					result: "error",
				})
		}
	})
})

router.post('/changeInformation', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "./dist/static/PersonImage"
	})
	form.parse(req, function(err, fields, files) {
		var telephone = fields.telephone[0];
		var address = fields.address[0];
		var interest = fields.interest[0];
		var gender = fields.gender[0];
		var name = fields.name[0];
		var photo = files.photo[0].originalFilename;
		fs.rename(files.photo[0].path, "./dist/static/PersonImage/" + files.photo[0].originalFilename, function(err) {
			console.log(err)
		})
		var obj = {
			telephone: telephone,
			interest: interest,
			gender: gender,
			name: name,
			photo: photo,
			address: address
		}
		user.changeInformation(obj, function(err, docs) {
			console.log(docs);
		})
	})
})

router.post('/login', function(req, res, next) {
	var tel = req.body.telephone;
	var password = req.body.password;
	var obj = {
		telephone: tel,
		password: password
	}
	user.checkLogin(obj, function(err, docs) {
		console.log("err  " + err + "\n docs：  " + docs)
			if (err == "success") {
				res.json({
					result: "success",
					user: docs
				})
			} else {
				if (err =="error") {
					res.json({
							result: "error",
							errorMeg: "1"
						}) //1表示密码错误，2表示找不到用户
				} else {
					res.json({
						result: "error",
						errorMeg: "2"
					})
				}
			}
	})
})

module.exports = router;