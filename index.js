const express = require('express');
const path = require('path');
require('dotenv').config();
const routeProject = require('./src/routes/project');

//app de express
const app = express();
//lectura y parseo del body
app.use(express.json());

//NodeServer
const server = require('http').createServer(app);

//path publico
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//mis rutas
app.use('/api/project', routeProject);

server.listen(process.env.PORT, (error) => {

    if (error) throw new Error(error);

    console.log('Servidor corriendo', process.env.PORT);

});