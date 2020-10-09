const Sequelize = require('sequelize');

const dbConnection = new Sequelize(
    'dbmr4kavvkifku',
    'niiuxqzxgpwzio',
    '970e58292c3c41ebb86f9189b792d2a74fad649314e8df6d77ca23541c9e5518', {
        host: 'ec2-52-200-48-116.compute-1.amazonaws.com',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: true
    }
);

module.exports = {
    dbConnection
}