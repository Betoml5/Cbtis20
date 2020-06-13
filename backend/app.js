const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Archivos de rutas
const posts_routes = require("./routes/post");

//Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cabeceras y cors



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

// rutas
app.use("/api", posts_routes);

// exportar
module.exports = app;
