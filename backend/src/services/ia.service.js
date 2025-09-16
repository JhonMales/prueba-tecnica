const { GoogleGenerativeAI } = require('@google/generative-ai');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generarResumenDescripciones = async () => {
    try {
        const proyectos = await prisma.proyecto.findMany();

        if (proyectos.length === 0) {
            return 'No hay proyectos para analizar.';
        }

        const descripciones = proyectos
            .map((p, index) => `Proyecto ${index + 1}: ${p.descripcion}`)
            .join('\n');

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `
        Eres un analista de producto.

        A continuación se presentan varias descripciones de proyectos registrados en una base de datos.

        Tu tarea es generar un resumen en español que incluya:

        1. El número total de proyectos registrados.
        2. Qué tipos de proyectos se están desarrollando (por ejemplo: salud, educación, comercio, etc.).
        3. Un análisis breve del enfoque general de estos proyectos.

        Escribe el resultado en un párrafo claro, profesional, sin enumeraciones directas por proyecto, y en un máximo de 5 líneas.

        Descripciones de proyectos:
        ${descripciones}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const texto = response.text();

        return texto;
    } catch (error) {
        console.error('Error al generar resumen IA:', error);
        throw new Error('No se pudo generar el resumen con Gemini');
    }
};
