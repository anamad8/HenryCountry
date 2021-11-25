const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.ENUM,
            values: ["1", "2", "3", "4", "5"],
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        temporada: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            values: ["Verano", "Primavera", "Invierno", "Otoño"],
            allowNull: false,
        },
    });
};