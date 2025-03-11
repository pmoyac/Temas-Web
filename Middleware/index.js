const express = require('express');
const app = express();
const { globalErrorHandler, AppError } = require('./utils/appError');
const usersRoutes = require('./routes/userRoute');
const morgan = require('morgan');
require('dotenv').config({path: './config.env'});

//middleware para analizar datos en formato json en el cuerpo de la solicitud
app.use(express.json());

//configurar middleware de morgan para el registro de solicutudes
app.use(morgan('combined'));

//middleware para exponer rutas y puedan ser accedidas
app.use('/api/users', usersRoutes);

app.all('*', (req, res, next)=>{
    const err = new AppError(`No se ha podido acceder a ${req.originalUrl} en el servidor`);
    next(error);
});

//middleware para el manejo de errores
app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} `);
});