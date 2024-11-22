import { Sequelize } from "sequelize";

const sequelize = new Sequelize('skatePark', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;