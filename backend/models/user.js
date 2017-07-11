var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function() {
	console.log("error")
});
db.once('open', function() {

	console.log("connected");
	var userschema = new mongoose.Schema({
		_id: Number,
		uname: String,
		pwd: String,
		birthday: Date,
		photo: String
	});
	userschema.methods.findByName = function(cb) {
		return this.model("User").find({
			uname: this.uname
		}, cb)
	}
	userschema.statics.findByName = function(uname, cb) {
		return this.find({
			uname: uname
		}, cb)
	}
	userModel = db.model("User", userschema);

	//	addstudent()
	//	queryUser()
	//	queryByID(2)
	//updateByID(2)
	//findByName()
	//	findByNameMode()

})