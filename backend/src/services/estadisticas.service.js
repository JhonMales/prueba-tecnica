const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.obtenerProyectosPorEstado = async () => {
    try {
        const resultados = await prisma.proyecto.groupBy({
            by: ['estado'],
            _count: {
                estado: true,
            },
        });

        const estadisticas = {};
        resultados.forEach(r => {
            estadisticas[r.estado] = r._count.estado;
        });

        return estadisticas;
    } catch (error) {
        console.error('Error al obtener datos agrupados:', error);
        throw new Error('No se pudo obtener el resumen de estados');
    }
};
