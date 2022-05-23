//Rotas de acesso 
const express = require('express');
const routes = express.Router();
const soma = require('./controllers/somaController');
const multiplicacao = require('./controllers/multController');
const subtracao = require('./controllers/subController');
const divisao = require('./controllers/divController');
const raizQuadrada = require('./controllers/raizController');
const porcentagem = require('./controllers/porcController');

routes.post('/soma', soma.index);
routes.post('/subtracao', subtracao.index);
routes.post('/multiplicacao', multiplicacao.index);
routes.post('/divisao', divisao.index);
routes.post('/raizQuadrada', raizQuadrada.index);
routes.post('/porcentagem', porcentagem.index);

module.exports = routes;