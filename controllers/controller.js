var mongo = require('mongoose');
// var Conta = mongo.model('Conta');

var saldoAtual;

module.exports = {
	gravar: function(req,res){
		var request = req.body;

		console.log(request);

		var saldo = parseFloat(request.salary) + parseFloat(request.bank.balance);
		console.log("Saldo "+saldo);
		var total = 0.0;
		for(var i in request.bank.transfer){
			var transf = request.bank.transfer[i];
			if(transf.transactionType == "debito"){
				total = total + parseFloat(transf.value);
				console.log("Debito "+ transf.value);
				saldo = saldo - total;
				console.log("Saldo "+saldo);
			}
			if(transf.transactionType == "credito"){
				total = total + parseFloat(transf.value);
				console.log("credito "+ transf.value);
				saldo = saldo + total;
				console.log("Saldo "+saldo);
			}
		}
		total = 0.0;
		for(var i in request.account){
			var contas = request.account[i];
			total = total + parseFloat(contas.value);
			saldoAtual = saldo - total;
		}
		console.log("atual "+saldoAtual);

		res.send("Dados Salvos com sucesso! "+ saldoAtual);

	},
	buscarID: function(req, res){
		if(req.body._id){
			Balada.findById(req.body._id, function(err, result){
				if (err) {
					return res.json(500, err);
				}
				res.send(result);
			});
		}else {
			return res.json(420, "deu ruim");
		}
	},
	deleteID: function(req,res){
		if(req.body._id){
			Balada.findByIdAndRemove(req.body._id, function(err) {
				if (err) {
					return res.json(500, err);
				}
				console.log('User deleted!');
				res.send('Balada deleted!');
			});
		}else {
			return res.json(420, "deu ruim");
		}
	},
	buscar: function(req, res){
		if(req.body.nome){
			Balada.find({ nome: req.body.nome}, function(err, result){
				if (err) {
					return res.json(500, err);
				}
				res.send(result);
			});
		}else {
			return res.json(420, "deu ruim");
		}
	},
	listarBaladas: function(req, res){
		var request = req.body;

		console.log(request.length);
		// Balada.find(function(err, result){
		// 			if (err) {
		// 				return res.json(500, err);
		// 			}
	  //   });
		res.send('{"contas":[{"tipoConta": "Agua","valorConta": "99,00","dataVencimentoConta": "15/10/2017"},'+
		'{"tipoConta": "Luz","valorConta": "99,00","dataVencimentoConta": "20/10/2017"},'+
		'{"tipoConta": "Internet","valorConta": "99,00","dataVencimentoConta": "18/10/2017"},'+
		'{"tipoConta": "Celular","valorConta": "99,00","dataVencimentoConta": "23/10/2017"}]}');
	}
};
