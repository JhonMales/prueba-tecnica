const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear proyecto
exports.crearProyecto = async (req, res) => {
    try {
        const { nombre, descripcion, estado, fechaInicio, fechaFin } = req.body;
        const nuevoProyecto = await prisma.proyecto.create({
            data: {
                nombre,
                descripcion,
                estado,
                fechaInicio: new Date(fechaInicio),
                fechaFin: new Date(fechaFin),
            },
        });
        res.status(201).json(nuevoProyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
};

// Obtener todos los proyectos
exports.obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await prisma.proyecto.findMany();
        res.json(proyectos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
};

// Obtener proyecto por ID
exports.obtenerProyectoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const proyecto = await prisma.proyecto.findUnique({
            where: { id: parseInt(id) },
        });

        if (!proyecto) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }

        res.json(proyecto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el proyecto' });
    }
};

// Actualizar proyecto
exports.actualizarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, estado, fechaInicio, fechaFin } = req.body;

        const proyectoActualizado = await prisma.proyecto.update({
            where: { id: parseInt(id) },
            data: {
                nombre,
                descripcion,
                estado,
                fechaInicio: new Date(fechaInicio),
                fechaFin: new Date(fechaFin),
            },
        });

        res.json(proyectoActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
};

// Eliminar proyecto
exports.eliminarProyecto = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.proyecto.delete({
            where: { id: parseInt(id) },
        });

        res.json({ mensaje: 'Proyecto eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
};
