
const mongoose = require('mongoose');
const app = require('./app');
const { config } = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then(() => {
		console.log("Conexión a la base de datos establecida satisfactoriamente...");
		// Creacion del servidor
		app.listen(config.port, () => {
			console.log("Servidor corriendo correctamente en la url: localhost:" + config.port);
		});

	})
	.catch(err => console.log(err));