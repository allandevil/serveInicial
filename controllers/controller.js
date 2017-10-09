var mongo = require('mongoose');
// var Conta = mongo.model('Conta');

module.exports = {
	gravar: function(req,res){
		var request = req.body;

		console.log(request);

		// if(request.length >= 2){
		// 	for (var i = 0; i < request.length; i++) {
		// 		var balada = new Balada(request[i]);
		// 		balada.save(function(err){
		// 			if (err) {
		//  				return res.json(500, err);
		//  		 }
		// 		});
		// 	}
		// }else if(request != undefined){
		// 	var balada = new Balada(request);
		// 	balada.save(function(err){
		// 		if (err) {
		// 			return res.json(500, err);
		// 	 }
		// 	});
		// }
		res.send("Dados Salvos com sucesso!");

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
