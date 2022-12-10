const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelClientes = connection.define(
    'tbl_clientes',
    {
        id_cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_cliente:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
        cpf_cliente:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        tel_cliente:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        email_cliente:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
    }
)

//modelClientes.sync({force:true});

module.exports = modelClientes;