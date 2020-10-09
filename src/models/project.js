const Sequelize = require('sequelize');
const { dbConnection } = require('../database/database');

const Project = dbConnection.define('project', {
    // project_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    // },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    remark: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});
Project.sync().then(() => {
    console.log('table created');
});
module.exports = {
    Project
}