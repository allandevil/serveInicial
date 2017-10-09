var mongo = require('mongoose');
var Schema = mongo.Schema;

var UserModel = function() {
	var User = new Schema({
		name:String,
		pass:String,
		salary:String,
		wageBill:String,
		daySalary:String,
		dayWageBill:String
		bank:{
			balance:String,
			transfer:[{
				source:String,
				transactionType:String,
				date:String,
				value:String}],
			transaction:[{
				source:String,
				date:String,
				value:String}]},
		account:[{
			source:String,
			value:String,
			dtDue:String
		}]
	});
	mongo.model('User',User);
};

module.exports = UserModel;
