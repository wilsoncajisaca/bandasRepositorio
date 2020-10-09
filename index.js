const express = require('express');
const path = require('path');
require('dotenv').config();

//app de express
const app = express();

//NodeServer
const server = require('http').createServer(app);

//path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (error) => {

    if (error) throw new Error(error);

    console.log('Servidor corriendo', process.env.PORT);

});