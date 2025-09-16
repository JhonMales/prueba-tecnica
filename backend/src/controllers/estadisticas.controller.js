const { obtenerProyectosPorEstado } = require('../services/estadisticas.service');

exports.graficosEstado = async (req, res) => {
    try {
        const resumen = await obtenerProyectosPorEstado();
        res.json(resumen);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos para el gráfico' });
    }
};
