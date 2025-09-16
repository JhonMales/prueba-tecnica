const express = require('express');
const router = express.Router();
const estadisticasController = require('../controllers/estadisticas.controller');

router.get('/graficos', estadisticasController.graficosEstado);

module.exports = router;
