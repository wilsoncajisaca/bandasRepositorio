const { response } = require('express');
const { Project } = require('../models/project');

const createProjects = (req, res = response) => {
    //console.log(req.body);
    const { name, priority, remark, deliverydate } = req.body;
    try {
        let newProject = Project.create({
            name,
            priority,
            remark,
            deliverydate
        }, {
            fields: ['name', 'priority', 'remark', 'deliverydate']
        });

        if (newProject) {
            console.log("Hooooola mundo");
            console.log(newProject);
            return res.json({
                message: 'Projecto creado',
                data: newProject
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Ocurrio un problema con el servidor',
            data: err
        });
    }
}

module.exports = {
    createProjects
}