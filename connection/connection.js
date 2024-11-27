const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('skatePark', 'postgres', 'claveBaseDeDatos', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;