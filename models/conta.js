var mongo = require('mongoose');
var Schema = mongo.Schema;

var ContasModel = function() {
	var Conta = new Schema({
		tipoConta:String,
		valorConta:String,
		dataVencimentoConta:String
	});
	mongo.model('Conta',Conta);
};

module.exports = ContasModel;
