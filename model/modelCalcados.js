const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCalcados = connection.define(
    'tbl_calcados',
    {
        id_calcado:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_calcado:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
        nome_calcado:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
        marca_calcado:{
            type: Sequelize.STRING(40),
            allowNull: false
        },
        valor_calcado:{
            type: Sequelize.FLOAT(11,10),
            allowNull: false
        }
    }
)

//modelCalcados.sync({force:true});

module.exports = modelCalcados;