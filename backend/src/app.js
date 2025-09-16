const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Proyecto iniciado');
});

//Rutas de la API
const proyectoRoutes = require('./routes/proyecto.routes');
app.use('/api/proyectos', proyectoRoutes);

// Rutas de IA
const iaRoutes = require('./routes/ia.routes');
app.use('/api', iaRoutes);

// Rutas de Estadísticas
const estadisticasRoutes = require('./routes/estadisticas.routes');
app.use('/api', estadisticasRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
