const express = require('express');
const routes = express.Router();
const delegateController = require('./app/controllers/delegateController');

routes.post('/webhook', delegateController.delegateCall);

module.exports = routes;
