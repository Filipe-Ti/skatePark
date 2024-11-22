import { DataTypes, STRING } from "sequelize";
import sequelize from "../connection/connection.js";

const Skater = sequelize.define('Skater', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    nombre: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    anosExperiencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    especialidad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    foto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    tableName: 'skaters',
    timestamps: false,
    underscored: true
});

export default Skater;