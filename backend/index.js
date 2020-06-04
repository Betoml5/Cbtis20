
const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/posts')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
				console.log("Servidor corriendo correctamente en la url: localhost:3700");
				
				
        	});

        })
        .catch(err => console.log(err));