const express = require('express');
const router = express.Router();
const iaController = require('../controllers/ia.controller');

router.get('/analisis', iaController.analizarProyectos);

module.exports = router;

