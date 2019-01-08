'use strict';

// - Importações
import express from 'express';
import bodyParser from 'body-parser';
import indexRoute from './routes/index';
import userRoute from './routes/user';
import employee from './routes/employee';

// - Inicializações
const app = express();

// - Configurações
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// - Rotas
app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/employee', employee);

export default app;