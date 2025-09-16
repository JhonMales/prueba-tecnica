// src/controllers/ia.controller.js
const { generarResumenDescripciones } = require('../services/ia.service');

exports.analizarProyectos = async (req, res) => {
    try {
        const resumen = await generarResumenDescripciones();
        res.json({ resumen });
    } catch (error) {
        res.status(500).json({ error: 'Error al generar resumen con IA' });
    }
};
