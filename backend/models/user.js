var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function() {
	console.log("error")
});

db.once('open', function() {

	console.log("connected");
	var userschema = new mongoose.Schema({
		telephone: String,
		name: String,
		password: String,
		photo: String,
		gender: String,
		interest: Array,
		address: Array
	});

	//	userschema.methods.findByID = function(cb) {
	//		return this.model("User").find({
	//			ID: this.ID
	//		}, cb)
	//	}
	//	userschema.statics.findByName = function(uname, cb) {
	//		return this.find({
	//			uname: uname
	//		}, cb)
	//	}
	userschema.statics.findByTelephone = function(telephone, cb) {
		return this.find({
			telephone: telephone
		}, cb)
	}
	userModel = db.model("User", userschema);
})

function creatUser(obj, cb) {
	userModel.findByTelephone(obj.telephone, function(err, docs) {
		if (docs == "") {
			var userEntity = new userModel(obj);
			userEntity.save();
			cb(err, docs)
		} else {
			cb(err, docs);
		}
	})
}

function changeInformation(obj,cb) {
	userModel.findByTelephone(obj.telephone, function(err, docs) {
		if (!err) {
			docs[0].interest = obj.interest;
			docs[0].gender = obj.gender;
			docs[0].address = obj.address;
			docs[0].name = obj.name;
			docs[0].photo = obj.photo;
			docs.save(cb)
		} else {
			cb(err);
		}
	})
}
function checkLogin(obj,cb){
	userModel.findByTelephone(obj.telephone, function(err, docs) {
		if (docs.length>0) {
			if(docs[0].password==obj.password){
				cb("success",docs[0])
			}else{
				cb("error","")
			}
		} else {
			cb("notFind","");

		}
	})
}
module.exports.checkLogin=checkLogin;
module.exports.creatUser = creatUser;
module.exports.changeInformation = changeInformation;