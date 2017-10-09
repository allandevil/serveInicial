var controller = require('../controllers/controller');

var appMambo = function(app){

	//lIstar Baladas
	app.get('/', controller.listarBaladas);

	//buscar por nome
	// app.post('/balada', controller.buscar);

	//Busca Por id
	// app.post('/id', controller.buscarID);

	//gravar registro
	app.post('/', controller.gravar);

	//Apagar Por id
	// app.delete('/id', controller.deleteID);
}

module.exports = appMambo;
