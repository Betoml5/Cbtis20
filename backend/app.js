

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//Archivos de rutas
const posts_routes = require('./routes/post')

//Middlewares

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Cabeceras y cotd
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', posts_routes);



// exportar
module.exports = app;
