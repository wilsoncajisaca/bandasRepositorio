const Project = require('../models/project');
const { response } = require('express');

const getProjects = async(req, res = response) => {
    //console.log(req.body);
    const { name, priority, remark, deliverydate } = req.body;
    try {

        let newProject = await Project.create({
            name,
            priority,
            remark,
            deliverydate
        });

        // let newProject = await Project.create({
        //     name,
        //     priority,
        //     remark,
        //     deliverydate
        // }, {
        //     fields: ['name', 'priority', 'remark', 'deliverydate']
        // });

        if (newProject) {
            return res.json({
                message: 'Projecto creado',
                data: newProject
            });
        }
        // res.json({
        //     message: 'Hoooola',
        //     data: {}

        // });
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