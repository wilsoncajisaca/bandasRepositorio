const Project = require('../models/project');
const { response } = require('express');

const getProjects = async(req, res = response) => {
    //console.log(req.body);
    const { name, priority, remark, deliverydate } = req.body;
    try {
        res.json({
            message: 'Bienvenido',
            data: {}
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Ocurrio un problema con el servidor',
            data: err
        });
    }
}

module.exports = {
    getProjects
}