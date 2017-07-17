var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});

db.once('open', function () {

	console.log("user connected");
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
	userschema.statics.findByTelephone = function (telephone, cb) {
		return this.find({
			telephone: telephone
		}, cb)
	}
	userModel = db.model("User", userschema);
	addUser();
})

function addUser() {
	var userEntity = new userModel({
		telephone: '1',
		password: '123456',
		photo: "/static/img/userImage/1.gif",
		name: "xu",
		gender: "man",
		interest: ["1", "2", "3"],
		address: ["1", "2"]
	})
	userEntity.save();

}

function creatUser(obj, cb) {
	userModel.find({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs.length==0) {
			var userEntity = new userModel(obj);
			userEntity.save();
			cb("success","")
		} else {
			cb("error", "");
		}
	})
}

function changeInformation(obj, cb) {
	userModel.findOne({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs) {
			docs.interest = obj.interest;
			docs.gender = obj.gender;
			docs.address = obj.address;
			docs.name = obj.name;
			docs.photo = obj.photo;
			docs.markModified('address');
			docs.markModified('interest');
			docs.save();
			cb("success", "")
		} else {
			cb("error", "")
		}
	})
}

function checkLogin(obj, cb) {
	userModel.findOne({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs) {
			if (docs.password == obj.password) {
				cb("success", docs)
			} else {
				cb("error", "")
			}
		} else {
			cb("notFind", "");

		}
	})
}
function getInformation(telephone,cb){
   userModel.findOne({telephone:telephone},function(err,docs){
	   if(docs){
          cb("success",docs)
	   }else{
		   cb("error","")
	   }
   })
}
module.exports.checkLogin = checkLogin;
module.exports.creatUser = creatUser;
module.exports.changeInformation = changeInformation;
module.exports.getInformation=getInformation;