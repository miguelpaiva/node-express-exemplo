const express = require("express");
const routes = express.Router();

const HomeController = require("./controllers/HomeController");

routes.get("/", HomeController.paginaInicial);

routes.get("/coisa", HomeController.fazerAlgumaCoisa);

routes.get("/enviar/:nome?", HomeController.enviarNome);

module.exports = routes;
